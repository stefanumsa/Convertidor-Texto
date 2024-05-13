const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); 
});

router.post('/sustitucion', (req, res) => {
    const text = req.body.text;

    // Convertir el texto por sustitución
    const substitutionText = substituirTexto(text);

    res.send(`Texto convertido por sustitución: ${substitutionText}`);
});

// Función para realizar la sustitución de texto
function substituirTexto(texto) {
    // Lógica para la sustitución de texto aquí
}

module.exports = router;
