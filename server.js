const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/ProjectsRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api', ProjectsRouter);

server.get('/', (req,res) => {
  res.status(200).json({ message: "Server is up and running" });
});

module.exports = server;