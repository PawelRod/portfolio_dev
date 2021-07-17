const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rodziewiczpp@gmail.com',
            pass: 'password01!'
        }
    })

    const mailOptions = {
        name: req.body.name,
        mail: req.body.mail,
        company: req.body.company,
        number: req.body.number,
        message: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error'); 
        } else {
            console.log('Email sent!');
            res.send('success'); 
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})