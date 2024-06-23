const jwt = require('jsonwebtoken');
const crypto = require('crypto');
let secretKey = crypto.randomBytes(64).toString('hex');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
