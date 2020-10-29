const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

const proffys = [
  {
    name: "Pedro Barão",
    avatar:
      "https://avatars2.githubusercontent.com/u/62365336?s=460&u=77f3d8aeebff51881efffaa2a4c0d48537538e09&v=4",
    whatsapp: "89972341232",
    bio:
      "Entusiasta das melhores tecnologias de produção musical. <br><br> Apaixonado por música",
    subject: "Mixagem",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],
  },
];

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters });
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html");
}

// Nunjucks config
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server
  // Static files (css, scripts, images)
  .use(express.static("public"))
  // Application routes
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)

  .listen(5500);
