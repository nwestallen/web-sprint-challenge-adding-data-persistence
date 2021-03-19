// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getAll()
    .then(projects => {
        res.json(projects);
    })
    .catch(next);
});

router.use((err, req, res) => {
    res.status(500).json({
        error: err.message,
        stack: err.stack
    })
});

module.exports = router;

