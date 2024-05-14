const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sustitucion'); 
});

router.post('/', (req, res) => { // Cambiado a '/'
    const text = req.body.text;

    const substitutionText = substituirTexto(text);

    res.send(`Texto convertido por sustitución: ${substitutionText}`);
});

function substituirTexto(texto) {
    // Aquí deberías implementar la lógica para sustituir el texto
}

module.exports = router;
