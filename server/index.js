const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const DataAccessObject = require('./dataAccessObject');
const Comment = require('./comment');

const port = process.env.PORT || 3001;
const rootDir = __dirname.replace('/server', '');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dataAccessObject = new DataAccessObject('./database.sqlite3');
const comment = new Comment(dataAccessObject);

comment.createTable().catch((error) => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

app.post('/createComment', function (request, response) {
  const { body } = request;
  comment.createComment(body).then((result) => {
    response.send(result);
  });
});

app.get('/getComment', function (request, response) {
  const { body } = request;
  const { id } = body;
  comment.getComment(id).then((result) => {
    response.send(result);
  });
});

app.get('/getComments', function (request, response) {
  comment.getComments().then((result) => {
    response.send(result);
  });
});

app.delete('/deleteComments', function (request, response) {
  comment.deleteComments().then((result) => {
    response.send(result);
  });
});

app.use(express.static(path.join(`${rootDir}`, 'build')));

app.get('/', function (req, res) {
  console.log("****** PATH: path.join(rootDir, 'build', 'index.html') **** ");
  res.sendFile(path.join(`${rootDir}`, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
