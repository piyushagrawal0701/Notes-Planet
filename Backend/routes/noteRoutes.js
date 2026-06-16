const express = require("express");

const router = express.Router();

const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
  searchNotes,
} = require("../controllers/noteController");

router.get("/", getAllNotes);

router.get("/search", searchNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

module.exports = router;