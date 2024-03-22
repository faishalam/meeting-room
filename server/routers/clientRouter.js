const express = require('express')
const ClientController = require('../controllers/clientController')
const authentication = require('../middleware/authentication')
const clientRouter = express.Router()


clientRouter.post("/client", authentication, ClientController.addClient)
clientRouter.get("/client", authentication, ClientController.getAllClient)
clientRouter.get("/client/:id", authentication, ClientController.getClientById)
clientRouter.put("/client/:id", authentication, ClientController.editClient)
clientRouter.delete("/client/:id", authentication, ClientController.deleteClient)


module.exports = clientRouter 