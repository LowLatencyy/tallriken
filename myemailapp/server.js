const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Laddar in .env för att använda miljövariabler

const app = express();
const port = 3000;

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,  // Använder miljövariabel för e-postadress
        pass: process.env.PASSWORD // Använder miljövariabel för lösenord
    }
});

app.post('/sendmail', (req, res) => {
    const mailOptions = {
        from: process.env.EMAIL,  // Använder din e-post från miljövariabel
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('error'); // Mer korrekt HTTP-statuskod vid fel
        } else {
            console.log('Email sent: ' + info.response);
            res.send('sent');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
