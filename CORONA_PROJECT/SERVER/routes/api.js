
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

router.get('/getAll', userController.getAllMembers);

router.get('/getUser/:userId', userController.getMemberById);

router.post('/createUser', userController.createUser);

router.put('/updateUser/:userId', userController.updateUser);

router.delete('/deleteUser/:userId', userController.deleteUser);

module.exports = router;
