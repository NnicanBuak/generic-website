const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const dataDirPath = path.join(__dirname, '../data');

let secretKey = crypto.randomBytes(64).toString('hex');

// Функция для чтения данных из файла users.json
function readUsersFromFile() {
    const filePath = path.join(dataDirPath, 'users.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
}

// Функция для записи данных в файл users.json
function writeUsersToFile(users) {
    const filePath = path.join(dataDirPath, 'users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
}

// Функция для входа пользователя и выдачи токена
async function login(req, res) {
    const { username, password } = req.body;
    const users = readUsersFromFile();

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Генерация нового секретного ключа при каждом входе
    secretKey = crypto.randomBytes(64).toString('hex');

    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
}

// Функция для регистрации нового пользователя
async function register(req, res) {
    const { username, password } = req.body;
    const users = readUsersFromFile();

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    writeUsersToFile(users);

    res.status(201).json({ message: 'User registered successfully' });
}

module.exports = {
    login,
    register,
    secretKey
};
