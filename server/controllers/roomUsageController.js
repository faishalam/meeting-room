const { RoomUsage, Client, Room } = require("../models")

class roomUsageController {
    static async getAllRoomUsage(req, res) {
        try {
            const allRoomUsage = await RoomUsage.findAll({
                include: [
                    {
                        model: Client,
                        attributes: ['name', 'userId'],
                        where : {
                            userId: req.user.id
                        }
                    },
                    {
                        model: Room,
                        attributes: ['roomName']
                    }
                ]
            });


            if (!allRoomUsage) return res.status(404).json({ message: "Room usage not found" })

            res.status(200).json(allRoomUsage);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async addRoomUsage(req, res) {
        try {
            const createRoom = await RoomUsage.create({ ...req.body})
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

    static async editRoomUsage(req, res) {
        try {
            const roomUsageId = req.params.id

            const findRoomUsage = await RoomUsage.findByPk(roomUsageId)

            if(!findRoomUsage) return res.status(404).json({ message: "Room usage not found" })
            
            const updateRoomUsage = await findRoomUsage.update({ ...req.body })
            res.status(200).json(updateRoomUsage)
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

    static async deleteRoomUsage(req, res) {
        try {
            const roomUsageId = req.params.id

            const findRoomUsage = await RoomUsage.findByPk(roomUsageId)
            if(!findRoomUsage) return res.status(404).json({ message: "Room usage not found" })

            await findRoomUsage.destroy()

            res.status(200).json({ message: `Room Usage has been delete` })
        } catch (error) {
            
        }
    }
}

module.exports = roomUsageController