const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");
const hamsters = require("./routes/hamsters.js");

const PORT = process.env.PORT || 1515;
//const staticFolder = path.join(__dirname, 'public');
const picsFolder = path.join(__dirname, "hamsterImg");
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`, req.params);
  next();
});

app.use(express.json());
app.use(cors());
//app.use( express.static(staticFolder) );
app.use("/hamsterImg", express.static(picsFolder));

// api for hamsters
app.use("/hamsters", hamsters);

//Starting server
app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
