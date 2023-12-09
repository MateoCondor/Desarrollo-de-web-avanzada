const router = require('express').Router();

router.use('/tareas', require('./api/tareas'));

module.exports = router;