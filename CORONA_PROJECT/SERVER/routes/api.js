// routes/api.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

// Route to get all members
router.get('/getAll', userController.getAllMembers);

// Route to get a member by ID
router.get('/getUser/:userId', userController.getMemberById);

// Route to add a new member
router.post('/createUser', userController.createUser);

// Route to update an existing member
router.put('/updateUser/:userId', userController.updateUser);

// Route to delete a member by ID
router.delete('/deleteUser/:userId', userController.deleteUser);

module.exports = router;
