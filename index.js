require("dotenv").config();
const { SERVER_HOST, SERVER_PORT } = require("./config");
const SERVER_URL = `http://${SERVER_HOST}:${SERVER_PORT}`;

const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", "views");
app.set("view engine", "pug");

const { items } = require("./models");
const sequelize = require("./config/db.config");
sequelize.sync();

app.get("/", (req, res) => {
  items
    .findAll()
    .then((docs) => {
      res.render("index", {
        items: docs,
      });
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
});

app.post("/", (req, res) => {
  let {
    body: { item },
  } = req;
  items
    .create({ item })
    .then((docs) => {
      res.redirect("/");
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
});

app.post("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  items
    .destroy({ where: { id } })
    .then((docs) => {
      // console.log(docs);
      res.redirect("/");
    })
    .catch((err) => res.status(500).json({ success: false, error: err }));
});

app.listen(SERVER_PORT, () => console.log(`Server started on: ${SERVER_URL}`));