import dotenv from "dotenv";
import axios from "axios";
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
    console.log("3. Requesting image from Pollinations...");

    const imageResponse = await axios.get(
      `https://image.pollinations.ai/prompt/${encodeURIComponent(
        prompt
      )}?model=flux`,
      {
        responseType: "arraybuffer",
        timeout: 30000,
        headers: {
          Authorization: `Bearer ${process.env.POLLINATIONS_API_KEY}`,
        },
      }
    );

    console.log("4. Image received from Pollinations");

    const generatedImage = Buffer.from(imageResponse.data).toString("base64");

    console.log("5. Sending image to frontend");

    res.status(200).json({
      photo: generatedImage,
    });
  } catch (error) {
    console.error("===== ERROR =====");

    if (error.code === "ECONNABORTED") {
      console.error("Request timed out after 30 seconds.");
    }

    console.error(error.response?.data || error.message);

    next(
      createError(
        error.response?.status || 500,
        error.response?.data?.error?.message ||
          error.message ||
          "Image generation failed."
      )
    );
  }
};