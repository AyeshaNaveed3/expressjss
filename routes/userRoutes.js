const express = require('express');
const { getAllUsers, updateUser, deleteUser, getProfile} = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();

router.get('/', getAllUsers);
router.put('/update', verifyToken, updateUser);
router.delete('/delete', verifyToken, deleteUser);
router.post('/profile', verifyToken, getProfile);


module.exports = router;
