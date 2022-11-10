const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

test("User access to the system", () => {
    router.route('/')
        .get(usersController.getAllUsers)
        .post(usersController.createNewUser)
        .patch(usersController.updateUser)
        .delete(usersController.deleteUser)
})

module.exports = router
