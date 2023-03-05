const express = require('express')
const { newProject, projects } = require('../controller/projectController')


const project = express.Router()

project.post('/', newProject)
project.get('/', projects)

module.exports = project