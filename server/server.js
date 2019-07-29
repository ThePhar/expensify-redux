const path = require("path");
const express = require("express");
const app = express();

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(80, () => {
    console.log('Server is up');
});