# 🎨 AI Image Generator

A modern **MERN Stack AI Image Generator** that transforms text prompts into AI-generated images using **Cloudflare Workers AI**. Users can generate images in real time, explore community creations, search generated images, and download or share their favorite AI artwork through a clean and responsive interface.

---

## 🚀 Features

- 🤖 Generate AI images from text prompts
- ⚡ Powered by Cloudflare Workers AI (Flux Schnell)
- 🎲 Surprise Me feature for random prompt generation
- 🔍 Search generated images instantly
- 🖼️ Community Gallery to browse shared creations
- 📥 Download generated images
- ☁️ Cloudinary integration for image storage
- 📱 Fully responsive UI for desktop and mobile
- 🎨 Modern Material UI design
- ⚡ Fast RESTful API built with Express.js
- 🗄️ MongoDB database for storing generated images

---

# 🛠️ Tech Stack

### Frontend
- React.js
- Material UI
- Styled Components
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Cloudinary
- dotenv

### AI Service
- **Cloudflare Workers AI**
- **Flux Schnell Image Generation Model**

---

# 📂 Project Structure

```
AI-IMAGE-GENERATOR/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/your-username/AI-Image-Generator.git
```

```bash
cd AI-Image-Generator
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔐 Environment Variables

Create a **.env** file inside the server folder.

```env
MONGODB_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CF_API_TOKEN=your_cloudflare_api_token
CF_ACCOUNT_ID=your_cloudflare_account_id
CF_IMAGE_MODEL=@cf/black-forest-labs/flux-1-schnell
```

`CF_IMAGE_MODEL` is optional and defaults to `@cf/black-forest-labs/flux-1-schnell`.

---

# ▶️ Running the Application

### Start Backend

```bash
cd server
npm start
```

or

```bash
npm run dev
```

---

### Start Frontend

```bash
cd client
npm start
```

The application will run at

```
http://localhost:3000
```

---

# 🖼️ Cloudflare Workers AI Integration

Images are generated using Cloudflare Workers AI and the Flux Schnell model.

The backend sends the user's prompt to Cloudflare and returns the generated image as base64 data for preview and storage.

---

# 📌 Workflow

1. User enters a prompt.
2. Frontend sends the prompt to the Express API.
3. Backend sends the prompt to Cloudflare Workers AI.
4. Flux Schnell creates the image.
5. The generated image is displayed.
6. Users can save or share the generated image.
7. Image metadata is stored in MongoDB.
8. Cloudinary manages uploaded images for persistent storage.

---

# 💻 API Endpoints

### Generate Image

```
POST /api/generate-image
```

Request

```json
{
  "prompt": "A cyberpunk city at night"
}
```

---

### Get Community Posts

```
GET /api/post
```

---

### Create Post

```
POST /api/post
```

---

# 📸 Screenshots

| Home | Community |
|------|-----------|
| Add screenshots here | Add screenshots here |

---

# 🎯 Future Enhancements

- User Authentication
- Image History
- Favorite Images
- Multiple AI Models
- Image Upscaling
- Prompt Templates
- Dark Mode
- AI Prompt Suggestions

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Dx Jayden**

Developed using the **MERN Stack** with **Cloudflare Workers AI** to create a fast, scalable, and user-friendly AI-powered image generation platform.