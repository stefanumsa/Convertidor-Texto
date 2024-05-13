const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    
    res.render('hexadecimal');
});

router.post('/', (req, res) => {

    const text = req.body.text;

    const hexadecimalText = Buffer.from(text).toString('hex');
    res.send(`Texto en hexadecimal: ${hexadecimalText}`);
});

module.exports = router;
