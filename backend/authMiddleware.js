const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        req.headers.userid = decoded.id; // Also set it in headers for note routes
        next();
    } catch (e) {
        res.status(401).json({ message: 'Token is not valid.' });
    }
}

module.exports = authMiddleware;
