const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Conexión con la base de datos establecida.');
})
.catch((error) => {
    console.log('Error de conexión', error);
});