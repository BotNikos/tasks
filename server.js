const express = require('express');
const app = express();

const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

const bodyParser = require('body-parser');

app.use(express.static('./'));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
    await client.connect();
    const db = client.db('tasks');
    req.db = db;
    next();
});

app.get('/index', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

const tasks = require('./server_modules/tasks');
app.use('/tasks', tasks);

app.use((req, res) => {
    client.close();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});
