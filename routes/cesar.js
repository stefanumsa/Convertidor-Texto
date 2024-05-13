const express = require('express');
const router = express.Router();

// Función para cifrar texto usando el cifrado César
function cifrarCesar(texto, desplazamiento) {
    // Implementar la lógica del cifrado César aquí
}

router.get('/', (req, res) => {
    res.render('cesar'); 
});

router.post('/', (req, res) => {
    const text = req.body.text;
    const shift = parseInt(req.body.shift);

    // Verificar si se proporcionó texto y el desplazamiento es un número válido
    if (!text || isNaN(shift)) {
        return res.status(400).send('Se requiere texto y un desplazamiento válido.');
    }

    // Cifrar el texto usando el cifrado César
    const textoCifrado = cifrarCesar(text, shift);

    res.send(`Texto cifrado: ${textoCifrado} (con desplazamiento ${shift})`);
});

module.exports = router;
