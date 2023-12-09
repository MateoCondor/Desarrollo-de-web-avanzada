const router = require('express').Router();

const Tarea = require('../../models/tareas.model');

router.get('/', async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.get('/:tareaId', async (req, res) => {
    const { tareaId } = req.params;

    const tarea = await Tarea.findById(tareaId);
    res.json(tarea);
});

module.exports = router;