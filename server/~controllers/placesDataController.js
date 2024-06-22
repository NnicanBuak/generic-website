const fs = require('fs');
const path = require('path');
const dataDirPath = path.join(__dirname, '../data');

function getAllDataFiles() {
    return fs.readdirSync(dataDirPath).filter(file => file.endsWith('.json'));
}

function getData(req, res) {
    const files = getAllDataFiles();
    const data = files.map(file => {
        const filePath = path.join(dataDirPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    });
    res.json(data);
}

function saveData(req, res) {
    const newData = req.body;
    const fileName = `data${Date.now()}.json`;
    const filePath = path.join(dataDirPath, fileName);
    fs.writeFile(filePath, JSON.stringify(newData, null, 2), 'utf8', err => {
        if (err) {
            return res.status(500).json({ error: 'Error writing file' });
        }
        res.status(200).json({ message: 'Data saved successfully', fileName });
    });
}

module.exports = {
    getData,
    saveData,
    getAllDataFiles
};
