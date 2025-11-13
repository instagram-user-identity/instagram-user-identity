const express = require('express')
const userDetail = require('../controller/user.controller')

const router = express.Router()

router.post('/user',userDetail)


module.exports = router