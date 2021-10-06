const path = require("path");
const router = require("express").Router();

const indexPage = path.join(__dirname, "../../public/index.html");
const notesPage = path.join(__dirname, "../../public/notes.html");
//Return the index Page
router.get("/", (req, res) => {
  res.sendFile(indexPage);
});

//Return the Notes Page
router.get("/notes", (req, res) => {
  res.sendFile(notesPage);
});

//Return the index Page
router.get("*", (req, res) => {
  res.sendFile(indexPage);
});

module.exports = router;
