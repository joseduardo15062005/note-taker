const express = require("express");

const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use api Routes
app.use("/api", apiRoutes);
//Use html routes
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API Server runnign now on port ${PORT}`);
});
