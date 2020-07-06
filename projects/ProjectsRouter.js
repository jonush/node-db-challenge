const express = require('express');
const helmet = require('helmet');

const Projects = require('./projectsModel');

const router = express.Router();

router.get('/projects', (req,res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log('GET /', err);
      res.status(500).json({ error: "Unable to retrieve projects" });
    });
});

router.get('/projects/:id', (req,res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
    .then(project => {
      if(project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ error: "No project with this id" });
      }
    })
    .catch(err => {
      console.log('GET /:id', err);
      res.status(500).json({ error: "Unable to retrieve project" });
    });
});

router.post('/projects', (req,res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      console.log('POST/', err);
      res.status(500).json({ error: "Unable to add the project" });
    });
});

router.get('/projects/:id/resources', (req,res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then(resources => {
      if(resources) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ error: "No resources found for this project" });
      }
    })
    .catch(err => {
      console.log('GET /', err);
      res.status(500).json({ error: "Unable to retrieve resources" });
    });
});

router.get('/resources', (req,res) => {
  Projects.getAllResources()
    .then(resources => {
      if(resources) {
        res.status(200).json(resources);
      } else {
        res.status(404).json({ error: "No resources found" });
      }
    })
    .catch(err => {
      console.log('GET /resources', err);
      res.status(500).json({ error: "Unable to get all resources" });
    })
});

router.post('/resources', (req,res) => {
  Projects.addResource(req.body)
    .then(resource => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      console.log('POST /resources', err);
      res.status(500).json({ error: "Failed to add the resource" });
    });
});

router.get('/projects/:id/tasks', (req,res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(tasks => {
      if(tasks.length) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ error: "No tasks were found" });
      }
    })
    .catch(err => {
      console.log('GET /:id/tasks', err);
      res.status(500).json({ error: "Unable to fetch the tasks" });
    });
});

router.post('/projects/:id/tasks', (req,res) => {
  const { id } = req.params;

  Projects.getProjectById(id)
    .then(project => {
      if(project) {
        Projects.addTask(req.body, id)
        .then(task => {
          res.status(201).json(req.body);
        })
      } else {
        res.status(404).json({ error: "No project was found"});
      }
    })
    .catch(err => {
      console.log('POST /:id/tasks', err);
      res.status(500).json({ error: "Unable to add the task" });
    });
});

router.post('/addResource', (req,res) => {
  Projects.addResourceToProject(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Failed to add the resource to the project" });
    })
});

router.get('/resources/:id', (req,res) => {
  const { id } = req.params;

  Projects.getResourceById(id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log('GET /:id', err);
      res.status(500).json({ error: "Unable to retrieve resource" });
    });
});

router.get('/tasks/:id', (req,res) => {
  const { id } = req.params;

  Projects.getTaskById(id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log('GET /tasks/:id', err);
      res.status(500).json({ error: "Unable to retrieve the task" });
    })
});

module.exports = router;