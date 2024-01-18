require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS 
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: text
    };

    let info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent: ' + info.response);

    return { success: true, message: `Письмо успешно отправлено, ${process.env.EMAIL_USER}` };
  } catch (error) {
    console.error('Ошибка отправки письма:', error);

    return { success: false, message: 'Ошибка отправки письма' };
  }
}

module.exports = { sendEmail };
