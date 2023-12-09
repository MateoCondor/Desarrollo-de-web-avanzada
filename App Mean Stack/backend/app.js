const express = require('express');
const cors = require('cors');

require('dotenv').config();

require('./config/db');

const app = express();

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /api/tareas
// GET /api/tareas/tareasid

app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El sevidor se esta ejecutando en el puerto ${PORT}.`);
});

