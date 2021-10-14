const router = require("express").Router();
const { notes } = require("../../db/db");
const { createNote, getNote, deleteNote } = require("../../lib/notes");
const { v4: uuidv4 } = require("uuid");

//get all notes
router.get("/notes", (req, res) => {
  console.log("request to the api notes");
  res.json(notes);
});

//get note from id
router.get("/note/:id", (req, res) => {
  const { id } = req.params;
  const note = getNote(id, notes);
  if (note) {
    res.json(note);
  } else {
    res.status(400).send(`don't find any note with id ${id}`);
  }
});
//post create new note
router.post("/notes", ({ body }, res) => {
  body.id = uuidv4();
  const note = body;
  createNote(note, notes);
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = deleteNote(id, notes);
  if (note) {
    res.json(note);
  } else {
    res.status(400).send(`don't find any note with id ${id}`);
  }
});

module.exports = router;
