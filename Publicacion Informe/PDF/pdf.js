
const express = require('express');
const fs = require('fs');
const PDFDocument = require('pdfkit');

const app = express();

app.get('/generar-pdf', (req, res) => {
  const doc = new PDFDocument();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename=ejemplo.pdf');

  doc.pipe(res);

  doc.fontSize(14).text('Ejemplo de PDF con Express.js Hola buenas tardes ', 50, 50);

  const table = {
    headers: ['Nombre', 'Edad', 'Ciudad'],
    rows: [
      ['Juan', 25, 'Ciudad A'],
      ['María', 30, 'Ciudad B'],
      ['Carlos', 22, 'Ciudad C']
    ]
  };
  doc.end();
});

app.listen(3000, () => {
  console.log('Servidor Express en ejecución en http://localhost:3000');
});
