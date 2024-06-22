const express = require('express');
const app = express();
const port = 3000;
const dataController = require('./controllers/dataController');

app.use(express.json());

// Импорт маршрутов
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');

// Использование маршрутов
app.use('/auth', authRoutes);
app.use('/api', dataRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Connected JSON files:');
    const files = dataController.getAllDataFiles();
    files.forEach(file => console.log(`- ${file}`));
});
