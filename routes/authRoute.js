const express = require('express')

const router = express.Router()
const { registration, login, userData } = require('../controllers/authController')
const { RegistrationValidator, loginValidator } = require('../validators/authValidator')
const validateRequest = require('../middlewares/validateRequest')
const token = require('../middlewares/tokenMiddleware')


router.route('/registration').post(validateRequest(RegistrationValidator), registration)
router.route('/login').post(validateRequest(loginValidator), login)

router.route('/user').get(token, userData)

module.exports = router