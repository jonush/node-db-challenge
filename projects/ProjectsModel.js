const db = require('../data/db-config');

function getProjects() {
  return db('projects');
};

function getProjectById(id) {
  return db('projects').where({ id }).first();
};

function addProject(project) {
  return db('projects')
    .insert(project, 'id')
    .then(ids => getProjectById(ids[0]));
};

function getResources(project_id) {
  return db('projects')
    .where('project_resources.project_id', project_id)
    .join('project_resources', 'projects.id', 'project_resources.project_id')
    .join('resources', 'project_resources.resource_id', 'resources.id')
    .select('resources.name', 'resources.description');
};

function getResourceById(id) {
  return db('resources').where({ id }).first();
};

function getAllResources() {
  return db('resources');
};

function addResource(resource) {
  return db('resources')
    .insert(resource, 'id')
    .then(ids => getResourceById(ids[0]));
};

function getTasks(project_id) {
  return db('projects')
    .where('tasks.project_id', project_id)
    .join('tasks', 'projects.id', 'tasks.project_id')
    .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed');
};

function getTaskById(id) {
  return db('tasks').where({ id }).first();
};

function addTask(task, project_id) {
  return db('tasks')
    .where(project_id)
    .insert(task)
    .then(ids => getTasks(project_id));
};

function addResourceToProject(resource) {
  return db('project_resources')
    .insert(resource, 'id')
    .then(ids => getResourceById(ids[0]));
};

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  getResources,
  getResourceById,
  getAllResources,
  addResource,
  getTasks,
  getTaskById,
  addTask,
  addResourceToProject
};