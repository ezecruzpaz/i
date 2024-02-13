const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/enviar-correo', async (req, res) => {
    const { destinatario, asunto, mensaje } = req.body;

    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'ezequielcruzpaz@gmail.com',
            pass: 'xffzxuantwlnzxuc', // Usa 'pass' en lugar de 'password'
        },
    };

    const mensajeCorreo = {
        from: 'ezequielcruzpaz@gmail.com',
        to: destinatario,
        subject: asunto,
        text: mensaje,
    };

    const transport = nodemailer.createTransport(config);

    try {
        const info = await transport.sendMail(mensajeCorreo);
        console.log('Correo electrónico enviado:', info);
        res.json({ success: true, message: 'Correo enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
    }
});

app.listen(port, () => {
    console.log(`Servidor Node.js en ejecución en http://localhost:${port}`);
});
