const { obtenerConexion } = require('../conexion');

async function registrar(nombre,  password) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO usuarios (nombre, password_hash) VALUES (?, ?, ?)', [nombre, password]);
        console.log('Usuario insertado correctamente');
    } catch (error) {
        console.error('Error al insertar usuario:', error);
        throw error;
    } finally {
        conexion.release(); 
    }
}

async function obtenerPorNombre(nombre) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        throw error;
    } finally {
        conexion.release(); 
    }
}


module.exports = {
    registrar,
    obtenerPorNombre,
};