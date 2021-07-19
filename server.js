const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'c.millerscott@gmail.com',
            pass: '5(q6j/qPGxzW'
        },
        // tls: {
        //     rejectUnauthorized: false
        // }
    })
    
    const mailOptions = {
        from: req.body.email,
        to: 'c.millerscott@gmail.com',
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