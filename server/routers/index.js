const express = require('express')
const userRouter = require('./userRouter')
const clientRouter = require('./clientRouter')
const roomUsageRouter = require('./roomUsageRouter')
const roomRouter = require('./roomRouter')


const router = express.Router()

router.use("/", userRouter)
router.use("/", clientRouter)
router.use("/", roomUsageRouter)
router.use("/", roomRouter)


module.exports = router