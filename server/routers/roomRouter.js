const express = require('express')
const authentication = require('../middleware/authentication')
const RoomController = require('../controllers/roomController')
const authorization = require('../middleware/authorization')
const roomRouter = express.Router()

roomRouter.get("/room", authentication, RoomController.getAllRoom)
roomRouter.post("/room", authentication, authorization, RoomController.addRoom)
roomRouter.put("/room/:id", authentication, authorization, RoomController.editRoom)
roomRouter.delete("/room/:id", authentication, authorization, RoomController.deleteRoom)


module.exports = roomRouter 