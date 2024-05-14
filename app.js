
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config');

// Configuración de la sesión
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const cesarRouter = require('./routes/cesar');
const loginRouter = require('./routes/login');
const base64Router = require('./routes/base64');
const hexadecimalRouter = require('./routes/hexadecimal');
const registroRouter = require('./routes/registro');
const sustitucionRouter = require('./routes/sustitucion');
const registrarUsuarioRouter = require('./routes/registrar-usuario');



app.use('/', indexRouter);
app.use('/auth', authRouter); 
app.use('/cesar', cesarRouter);
app.use('/login', loginRouter);
app.use('/base64', base64Router);
app.use('/hexadecimal', hexadecimalRouter);
app.use('/registro', registroRouter);
app.use('/sustitucion', sustitucionRouter);
app.use('/registrar-usuario', registrarUsuarioRouter);



app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
