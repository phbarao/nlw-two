// Servidor
const express = require('express');
const server = express();

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses,
} = require('./pages');

// Nunjucks config
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  // Receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  // Static files (css, scripts, images)
  .use(express.static('public'))
  // Application routes
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-classes', saveClasses)

  // Server start
  .listen(5500);
