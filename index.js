const express = require('express'); 
const dotenv = require('dotenv').config(); // Считывание переменных окружения
const path = require('path'); // модуль для парсинга пути

 
const PORT = process.env.PORT || 3010;
const app = express();


 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});