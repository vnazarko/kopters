require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { sendEmail } = require('./methods/emailSender');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;
  
    try {
      const result = await sendEmail(to, subject, text);
  
      if (result.success) {
        res.status(200).send(result.message);
      } else {
        res.status(500).send(result.message);
      }
    } catch (error) {
      console.error('Ошибка при отправке письма:', error);
      res.status(500).send('Внутренняя ошибка сервера при отправке письма');
    }
  });
  

const port = 5183;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
