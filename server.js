const nodemailer = require('nodemailer');
const express = require('express');
const dotenv = require('dotenv');
const app = express();



const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    
    const mailOptions = {
        from: req.body.email,
        to: process.env.USER,
        subject: `Message from: ${req.body.email}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
} )

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})