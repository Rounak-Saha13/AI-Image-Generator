import dotenv from "dotenv";
import { createError } from "../error.js";

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    console.log("1. Request received");

    const { prompt } = req.body;

    if (!prompt) {
      return next(createError(400, "Prompt is required"));
    }

    console.log("2. Prompt:", prompt);
    if (!process.env.CF_API_TOKEN || !process.env.CF_ACCOUNT_ID) {
      return next(
        createError(
          500,
          "CF_API_TOKEN and CF_ACCOUNT_ID must be configured"
        )
      );
    }

    console.log("3. Requesting image from Cloudflare Workers AI...");

    const model = process.env.CF_IMAGE_MODEL || "@cf/black-forest-labs/flux-1-schnell";
    const imageResponse = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/ai/run/${model}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    if (!imageResponse.ok) {
      const errorBody = await imageResponse.text();
      const error = new Error(errorBody || "Cloudflare image generation failed");
      error.status = imageResponse.status;
      throw error;
    }

    const generatedImage = await imageResponse.json();
    const imageData = generatedImage.result?.image;

    if (!imageData) {
      throw new Error("Cloudflare did not return an image");
    }

    console.log("4. Image received from Cloudflare Workers AI");

    console.log("5. Sending image to frontend");

    res.status(200).json({
      photo: imageData,
    });
  } catch (error) {
    console.error("===== ERROR =====");

    if (error.code === "ECONNABORTED") {
      console.error("Request timed out after 30 seconds.");
    }

    console.error(error.response?.data || error.message);

    next(
      createError(
        error.status || error.response?.status || 500,
        error.response?.data?.error?.message ||
          error.message ||
          "Image generation failed."
      )
    );
  }
};