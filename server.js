const path = require("path");
const express = require("express");

const indexPage = path.join(__dirname, "./public/index.html");
const notesPage = path.join(__dirname, "./public/notes.html");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Return the index Page
app.get("/", (req, res) => {
  res.sendFile(indexPage);
});

//Return the Notes Page
app.get("/notes", (req, res) => {
  res.sendFile(notesPage);
});

//Return the index Page
app.get("*", (req, res) => {
  res.sendFile(indexPage);
});

app.listen(PORT, () => {
  console.log(`API Server runnign now on port ${PORT}`);
});
