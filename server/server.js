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

// Model
const UsersSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  avatar: String,
  user_id: String,
});

mongoose.model("Users", UsersSchema);
const Users = mongoose.model("Users");

// Controller
const getAll = (req, res) => {
  // get req, send res
  Users.find()
    .exec()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Users.create(req.body)
    .then((createUsers) => res.json(createUsers))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Users.updateOne({ _id: req.params.user_id }, { $set: req.body })
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Users.deleteOne({ _id: req.params.user_id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

// Routes
app.get("/users", cors(corsOptions), getAll);
app.post("/users", cors(corsOptions), create);
app.put("/users/:id", cors(corsOptions), update);
app.delete("/users/:id", cors(corsOptions), remove);

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(appPort, () => console.log(`Listening on port ${appPort} ...`))
  )
  .catch((err) => console.error(`Error connecting to mongo: ${mongoUrl}`, err));
