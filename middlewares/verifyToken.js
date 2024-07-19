const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
            if (err) {
                console.error('Token verification failed:', err);
                res.status(403).json({ message: 'Token verification failed' });
            } else {
                req.authData = authData;
                next();
            }
        });
    } else {
        res.status(403).json({ message: 'Token not provided' });
    }
}

module.exports = verifyToken;
