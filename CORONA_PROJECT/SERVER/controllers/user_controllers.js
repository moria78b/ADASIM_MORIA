// controllers/user_controllers.js

const User = require('../models/User');

// Function to fetch all members
const getAllMembers = async (req, res) => {
    try {
        const members = await User.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Function to fetch a single member by ID
const getMemberById = async (req, res) => {
    try {
        const member = await User.findById(req.params.userId);
        if (!member) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Function to add a new member
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Function to update an existing member
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Function to delete a member by ID
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Member not found' });
        }
        res.json({ message: 'Member deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getAllMembers, getMemberById, createUser, updateUser, deleteUser };
