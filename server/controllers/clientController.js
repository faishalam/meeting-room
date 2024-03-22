const { Client, User } = require("../models");

class ClientController {
    static async addClient(req, res) {
        try {
            const { name, email, phone, credit } = req.body

            let newClient = await Client.create({ name, email, phone, credit, userId: req.user.id })

            res.status(201).json(newClient)
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

    static async getAllClient(req, res) {
        try {
            const response = await Client.findAll({
                where: {
                    userId: req.user.id,
                },
                include: [
                    {
                        model: User,
                        attributes: ['name', 'email']
                    }
                ]
            });


            res.status(200).json(response)
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

    static async getClientById(req, res) {
        try {
            const { id } = req.params

            const response = await Client.findAll({
                where: {
                    userId: req.user.id,
                    id: id
                },
                include: [
                    {
                        model: User,
                        attributes: ['name', 'email']
                    }
                ]
            });

            res.status(200).json(response)
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

    static async editClient(req, res) {
        try {
            const { id } = req.params
            const userId = req.user.id
            const { name, email, phone, credit } = req.body

            let client = await Client.findByPk(id)
            if (!client) return res.status(404).json({ message: "Client not found" })

            if (client.userId !== userId) return res.status(401).json({ message: "You are not have permission" })

            await client.update({ name, email, phone, credit, userId: userId });

            res.status(200).json({ message: `Client with name ${client.name} has been update` })
        } catch (error) {
            console.log(error)
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async deleteClient(req, res) {
        try {
            const { id } = req.params
            const userId = req.user.id

            let client = await Client.findByPk(id)
            if (!client) return res.status(404).json({ message: "Client not found" })

            if (client.userId !== userId) return res.status(401).json({ message: "You are not have permission" })

            await client.destroy();

            res.status(200).json({ message: `Client with name ${client.name} has been deleted` })
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: error.errors[0].message })
            }
            if (error.name === "SequelizeForeignKeyConstraintError") {
                return res.status(400).json({ message: 'This client already on booking list' })
            }
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = ClientController