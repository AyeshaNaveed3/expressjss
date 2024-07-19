const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.updateUser = async (req, res) => {
    const { username, email, password } = req.body;
    const userId = req.authData.id;

    await User.update({ username, email, password }, { where: { id: userId } });
    res.json({ id: userId, username, email, password });
};

exports.deleteUser = async (req, res) => {
    const userId = req.authData.id;
    console.log(userId)
    await User.destroy({ where: { id: userId } });
    res.json({ message: 'Deleted successfully' });
};

exports.getProfile = (req, res) => {
    res.json({
        message: 'Profile accessed',
        authData: req.authData
    });
};

