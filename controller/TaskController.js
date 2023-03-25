const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const taskList = await Task.find()
        return res.render("index", {taskList})
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
}

const createTask = async (req, res) => {
    const task = req.body // requisição doo body, ou seja, vem do cliente

    if(!task.task){ // verifica se existe uma task no campo task
        return res.redirect('/')
    }

    try{
        await Task.create(task) // task recebida no body espere até a task ser criada 
        return res.redirect('/')
    } catch(err) {
        res.status(500).send({error: err.message}) // esse message esta dentro do err
    }
}

const getByID = async (req, res) => {
    const task = await Task.findOne({_id: req.params.id }) // uma vez que vem do cliente é uma requisição
    const taskList = await Task.find() // para mandar não so a task mas a tasklist se não vai sumir 
    res.render("index", {task, taskList})
}

module.exports = {
    getAllTasks,
    createTask
}