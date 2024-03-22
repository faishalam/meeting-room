const { Room } = require("../models")

class RoomController {
    static async getAllRoom(req, res) {
        try {
            const getAllRoom = await Room.findAll()

            res.status(200).json(getAllRoom)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async addRoom(req, res) {
        try {
            const createRoom = await Room.create({ ...req.body})
            res.status(201).json(createRoom)
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async editRoom(req, res) {
        try {
            const roomId = req.params.id
            const findRoom = await Room.findByPk(roomId)

            if(!findRoom) return res.status(404).json({ message: "Room not found" })
            const updateRoom = await findRoom.update({ ...req.body })
            res.status(200).json(updateRoom)
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async deleteRoom(req, res) {
        try {
            const roomId = req.params.id
            const findRoom = await Room.findByPk(roomId)
            if(!findRoom) return res.status(404).json({ message: "Room not found" })
            await findRoom.destroy()
            res.status(200).json({ message: "Room has been deleted" })
        } catch (error) {
            if(error.name === "SequelizeForeignKeyConstraintError") {
                return res.status(400).json({ message: 'This room already on booking list' })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = RoomController