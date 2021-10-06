const path = require("path");
const express = require("express");

const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use html routes
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API Server runnign now on port ${PORT}`);
});
