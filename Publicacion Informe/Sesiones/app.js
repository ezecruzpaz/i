const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Configurar middleware para servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configurar las rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulario.html'));
});

app.get('/pagina1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina1.html'));
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
