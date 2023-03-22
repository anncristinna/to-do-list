const Task = require('../models/Task')
const getAllTasks = (req, res) => {
    return res.render("index")
}

const createTask = async (req, res) => {
    const task = req.body // requisição doo body, ou seja, vem do cliente

    if(!task.task){ // verifica se existe uma task no campo task
        return res.redirect('/')
    }

    try{
        await Task.create(task) // task recebida no body
        return res.redirect('/')
    } catch(err) {
        res.status(500).send({error: err.message})
    }
}

module.exports = {
    getAllTasks,
    createTask
}