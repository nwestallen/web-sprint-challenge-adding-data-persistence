// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req ,res, next) => {
    Resource.getAll()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
});


router.post('/', (req, res, next) => {
    Resource.create(req.body)
    .then(resource => {
        res.json(resource)
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
