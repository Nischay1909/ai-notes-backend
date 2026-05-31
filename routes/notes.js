const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// CREATE note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = new Note({ title, content });
    const savedNote = await note.save();

    res.json(savedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE note
router.put("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE note
router.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;