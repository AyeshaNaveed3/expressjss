const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email, password } });

    if (user) {
        const token = jwt.sign({ id: user.id, username:user.username,email: user.email }, process.env.SECRET_KEY, { expiresIn: '5d' });
        res.send({ token, user });
    } else {
        res.status(401).send('Email and password not found');
    }
};

exports.signup = async (req, res) => {
    const { username, password, email } = req.body;
    const user = await User.create({ username, password, email });
    res.json({ id: user.id, username, password, email });
};


