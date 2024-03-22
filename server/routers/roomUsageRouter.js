const express = require('express')
const authentication = require('../middleware/authentication')
const roomUsageController = require('../controllers/roomUsageController')
const roomUsageRouter = express.Router()


roomUsageRouter.get("/roomUsage", authentication, roomUsageController.getAllRoomUsage)
roomUsageRouter.post("/roomUsage", authentication, roomUsageController.addRoomUsage)
roomUsageRouter.put("/roomUsage/:id", authentication, roomUsageController.editRoomUsage)
roomUsageRouter.delete("/roomUsage/:id", authentication, roomUsageController.deleteRoomUsage)


module.exports = roomUsageRouter 