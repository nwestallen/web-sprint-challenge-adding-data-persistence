// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getAll()
    .then(tasks => {
        res.json(tasks.map(task => ({
            ...task,
            task_completed: !!task.task_completed
        })));
    })
    .catch(next)
});

router.post('/', (req, res, next) => {
    Task.create(req.body)
    .then(task => {
        res.json({
            ...task,
            task_completed: !!task.task_completed
        });
    })
    .catch(next)
});

router.use((err, req, res) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
});

module.exports = router;
