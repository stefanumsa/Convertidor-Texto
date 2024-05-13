const express = require('express');
const router = express.Router();
const base64 = require('base64-js');

router.post('/', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Se requiere el texto a convertir.' });
  }

  try {

    const textoBase64 = base64.encode(text);

    res.json({ textoBase64 });
  } catch (error) {
    
    res.status(500).json({ error: 'Ocurrió un error durante la conversión.' });
  }
});

module.exports = router;
