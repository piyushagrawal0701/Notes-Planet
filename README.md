# 📝 Notes Management System

A full-stack Notes Management System built using the MERN stack that allows users to create, view, update, delete, and search notes efficiently.

🚀 Live Demo
🌐 [Live Application](https://notesplanet.vercel.app/)

⚙️ Backend API

[Backend API](https://notes-planet.vercel.app/)

📂 GitHub Repository

[GitHub Repository](https://github.com/piyushagrawal0701/Notes-Planet)

## 🚀 Features

### Notes Management

* Create new notes
* View all notes
* View single note details
* Edit existing notes
* Delete notes with confirmation

### Search Functionality

* Search notes by title
* Search notes by content
* Real-time search experience

### User Experience

* Responsive design for desktop, tablet, and mobile
* Loading states
* Empty states
* Toast notifications
* Modern and clean UI

### Validation

* Title is required
* Backend validation
* Error handling for invalid requests

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Hot Toast
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Project Structure

### Backend

```bash
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── noteController.js
│
├── models/
│   └── note.js
│
├── routes/
│   └── noteRoutes.js
│
├── .env
├── server.js
└── package.json
```

### Frontend

```bash
frontend/
│
├── src/
│   ├── components/
│   │   └── NoteCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreateNote.jsx
│   │   ├── EditNote.jsx
│   │   └── ViewNote.jsx
│   │
│   ├── services/
│   │   └── noteApi.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install
```

Run frontend:

```bash
npm run dev
```

---

## 📡 API Endpoints

### Create Note

```http
POST /api/notes
```

### Get All Notes

```http
GET /api/notes
```

### Get Single Note

```http
GET /api/notes/:id
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

### Search Notes

```http
GET /api/notes/search?q=keyword
```

---

## 📋 Note Schema

```json
{
  "_id": "string",
  "title": "string",
  "content": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

---

## 🎯 Assignment Requirements Covered

* Fix bug identification and resolution
* Create multiple notes
* View all notes
* View single note
* Edit notes
* Delete notes
* Search notes
* MongoDB database integration
* Validation and error handling
* Responsive UI
* Loading and empty states
* Clean API structure
* Proper folder organization

---

## 🔮 Future Improvements

* Note categories/tags
* Pinned notes
* Authentication & authorization
* Rich text editor
* Dark mode
* Pagination
* Auto-save drafts

---

## 👨‍💻 Author

**Piyush Agrawal**

Full Stack Developer | MERN Stack Developer

GitHub: https://github.com/piyushagrawal0701
