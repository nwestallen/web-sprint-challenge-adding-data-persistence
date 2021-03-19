// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req ,res) => {
    Resource.getAll()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => res.json({message: err}))
});

module.exports = router;
