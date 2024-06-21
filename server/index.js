const express = require('express');
const mongoose = require('mongoose');
const db = require('./db'); // Подключение к MongoDB
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const dataPath = path.join(__dirname, 'data.json');

app.use(express.json());

app.get('/api/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
