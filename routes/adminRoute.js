const express = require('express')
const tokenMiddleware = require('../middlewares/tokenMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')
const { adminGetUsers, adminGetContact, adminDeleteUsers, adminEditGetUsers, adminUpdateUsers, deleteContact } = require('../controllers/adminController')
const router = express.Router()


router.route('/users').get(tokenMiddleware, adminMiddleware, adminGetUsers)
router.route('/users/delete/:id').delete(tokenMiddleware, adminMiddleware, adminDeleteUsers)
router.route('/users/get/:id').get(tokenMiddleware, adminMiddleware, adminEditGetUsers)
router.route('/users/get/:id').patch(tokenMiddleware, adminMiddleware, adminUpdateUsers)


router.route('/contacts').get(tokenMiddleware, adminMiddleware, adminGetContact)
router.route('/contacts/:id').delete(tokenMiddleware, adminMiddleware, deleteContact)


module.exports = router