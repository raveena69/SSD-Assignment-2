const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')

test("User Login to the system", () => {
    router.route('/').post(loginLimiter, authController.login)
})

test("Refresh the token", () => {
    router.route('/refresh').get(authController.refresh)
})

test("User Logout from the system", () => {
    router.route('/logout')
        .post(authController.logout)
})

module.exports = router