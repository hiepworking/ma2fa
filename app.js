const express = require('express');
const speakeasy = require('speakeasy');

const app = express();
const port = 80;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('public'));

app.post('/generateOTP', (req, res) => {
    const secret = req.body.secretKey;

    const token = speakeasy.totp({
        secret: secret,
        encoding: 'base32'
    });

    res.send({ otp: token });
});

app.listen(port, () => {
    console.log(`MA2FA.COM running in ${port}`);
});
