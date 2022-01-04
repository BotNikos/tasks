const express = require('express');
const app = express();

app.use(express.static('./'));

app.get('/index', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});
