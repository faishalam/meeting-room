const { User } = require("../models");

async function authorization(req, res, next) {
    try {
        const { id } = req.user
        const user = await User.findByPk(id)
        if (!user) return res.status(404).json({ message: `notFound` })

        if (user.role === 'admin') {
            next()
        } else {
            return res.status(403).json({ message: 'You are not authorized' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = authorization