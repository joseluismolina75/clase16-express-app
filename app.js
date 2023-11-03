const express = require('express');

const app = express();

const path = require('path');

const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
}
);

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    console.log('Estás en el Home');
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/contacto', (req, res) => {
//    console.log('Estás en contacto');
    res.send('Estás en la página contacto');
});

