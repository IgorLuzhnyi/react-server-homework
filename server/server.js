const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const appPort = 4004;
const mongoUrl =
  "mongodb+srv://admin:67890@cluster0.qvlsqiv.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// Models
const UsersSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  avatar: String,
  user_id: String,
});

const NewsSchema = new mongoose.Schema({
  title: String,
  newsImg: String,
  content: String,
  news_id: String,
  newsDate: String,
});

mongoose.model("Users", UsersSchema);
const Users = mongoose.model("Users");

mongoose.model("News", NewsSchema);
const News = mongoose.model("News");

// Controller
// users
const getAllUsers = (req, res) => {
  // get req, send res
  Users.find()
    .exec()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const createUser = (req, res) => {
  Users.create(req.body)
    .then((createUsers) => res.json(createUsers))
    .catch((err) => res.status(500).json(err));
};

const updateUser = (req, res) => {
  Users.updateOne({ _id: req.params.user_id }, { $set: req.body })
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const removeUser = (req, res) => {
  Users.deleteOne({ _id: req.params.user_id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

// news
const getAllNews = (req, res) => {
  // get req, send res
  News.find()
    .exec()
    .then((news) => res.json(news))
    .catch((err) => res.status(500).json(err));
};

const createNews = (req, res) => {
  News.create(req.body)
    .then((createNews) => res.json(createNews))
    .catch((err) => res.status(500).json(err));
};

const updateNews = (req, res) => {
  News.updateOne({ _id: req.params.news_id }, { $set: req.body })
    .exec()
    .then((news) => res.json(news))
    .catch((err) => res.status(500).json(err));
};

const removeNews = (req, res) => {
  News.deleteOne({ _id: req.params.news_id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

// Routes
// users
app.get("/users", cors(corsOptions), getAllUsers);
app.post("/users", cors(corsOptions), createUser);
app.put("/users/:user_id", cors(corsOptions), updateUser);
app.delete("/users/:user_id", cors(corsOptions), removeUser);

// news
app.get("/news", cors(corsOptions), getAllNews);
app.post("/news", cors(corsOptions), createNews);
app.put("/news/:news_id", cors(corsOptions), updateNews);
app.delete("/news/:news_id", cors(corsOptions), removeNews);

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(appPort, () => console.log(`Listening on port ${appPort} ...`))
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoUrl}`, err));
