# 🎨 AI Image Generator

A modern **MERN Stack AI Image Generator** that transforms text prompts into stunning AI-generated images using the **Pollinations AI Image API (Flux Model)**. Users can generate images in real time, explore community creations, search generated images, and download or share their favorite AI artwork through a clean and responsive interface.

---

## 🚀 Features

- 🤖 Generate AI images from text prompts
- ⚡ Powered by the Pollinations AI Image API (Flux Model)
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
- **Pollinations AI Image API**
- **Flux Image Generation Model**

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
```

> **Note:** This project uses the **Pollinations AI Image API**, which does not require an API key for basic image generation.

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

# 🖼️ Pollinations AI Integration

Images are generated using the Pollinations AI Image API.

Example request:

```http
https://image.pollinations.ai/prompt/A futuristic city at sunset?model=flux
```

or

```http
https://gen.pollinations.ai/image/A futuristic city at sunset?model=flux
```

The backend dynamically constructs the image generation URL from the user's prompt and returns the generated image to the frontend for preview and storage.

---

# 📌 Workflow

1. User enters a prompt.
2. Frontend sends the prompt to the Express API.
3. Backend generates a Pollinations image URL.
4. Pollinations AI creates the image.
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

<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/8c127ecc-c712-4afc-92ec-81179c3b33a4" />

<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/e7d813c7-b913-4c6a-874a-14fab5b73715" />

<img width="1920" height="743" alt="image" src="https://github.com/user-attachments/assets/48acf519-c0e8-4b10-b6c9-374a09c8a994" />


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

Developed using the **MERN Stack** with **Pollinations AI Image API (Flux Model)** to create a fast, scalable, and user-friendly AI-powered image generation platform.
