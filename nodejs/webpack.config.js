var path = require('path'); // Libreria interna en NODE
module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'bundle.js', // Nombre del archivo compilado.
        path: path.resolve(__dirname, 'prod') //path al archivo compilado.
    }
}