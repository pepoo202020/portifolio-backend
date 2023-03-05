const Project = require('../models/projectModel.js')

// create a new project
const newProject = async (req, res, next) => {
    const { title, description, image, language_title, link } = req.body
    try {
        const newProject = new Project({
            title: title,
            description: description,
            image: image,
            languages: language_title,
            link: link
        })

        await newProject.save()
        res.status(201).json({
            success: true,
            project: newProject
        })
    } catch (error) {
        throw new Error(`Error creating project in controller: ${error.message}`)
    }
}

// get the project
const projects = async (req, res, next) => {
    try {
        const projects = await Project.find()
        res.status(200).json({
            success: true,
            projects
        })
    } catch (error) {
        throw new Error(`Error getting projects in controller: ${error.message}`)
    }
}

module.exports = { newProject, projects }