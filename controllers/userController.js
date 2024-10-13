const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const register = async (req, res) => {
    // Registration logic...
};

// Login a user
const login = async (req, res) => {
    // Login logic...
};

module.exports = { register, login };
