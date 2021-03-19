// build your `/api/projects` router here
const express = require('express');
const { validateProjectPayload } = require('./middleware');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getAll()
    .then(projects => {
        res.json(projects.map(project => ({
            ...project, 
            project_completed: !!project.project_completed
        })));
    })
    .catch(next);
});

router.post('/', validateProjectPayload, (req, res, next) => {
    Project.create(req.body)
    .then(project => {
        res.json({
            ...project, 
            project_completed: !!project.project_completed
        });
    })
    .catch(next);
});

router.get('/:id/tasks', (req, res, next) => {
    const project_id = req.params.id;
    Project.getProjectTasks(project_id)
    .then(tasks => {
        res.json(tasks.map(task => ({
            ...task,
            task_completed: !!task.task_completed
        })))
    })
    .catch(next);
});

router.use((err, req, res) => {
    if(process.env.NODE_ENV === 'development') {
        res.status(500).json({
        error: err.message,
        stack: err.stack
        })
    } else {
        res.status(500).json({
            message: 'data cannot be retrieved from server'
        })
    }
});

module.exports = router;

