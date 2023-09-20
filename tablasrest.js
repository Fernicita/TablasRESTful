const express = require('express');
const app = express();

app.use(express.json());

// Sumar n1 + n2
app.get('/results/:n1/:n2', (req, res) => {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resultado = n1 + n2;
    res.json('La respuesta es '+ resultado);
});

// Multiplicar n1 * n2
app.post('/results', (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const resultado = n1 * n2;
    res.json('La respuesta es '+ resultado);
});

// Dividir n1 / n2
app.put('/results', (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const resultado = n1 / n2;
    res.json('La respuesta es '+ resultado);
});

// otencia n1 ^ n2
app.patch('/results', (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const resultado = Math.pow(n1, n2);
    res.json('La respuesta es '+ resultado);
});

// Restar n1 - n2
app.delete('/results/:n1/:n2', (req, res) => {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resultado = n1 - n2;
    res.json('La respuesta es '+ resultado);
});

app.listen(4000, () => { //esto se puede cambiar
    console.log("El servidor esta corriendo en el puerto 4000");
});
