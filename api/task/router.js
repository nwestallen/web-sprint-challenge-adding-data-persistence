// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getAll()
    .then(task => {
        res.json(task);
    })
    .catch(next)
});

module.exports = router;
