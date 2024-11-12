const jwt = require('jsonwebtoken');

const tokenMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(500).json({ message: "Token is required" });
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user;
        next()
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}

module.exports = tokenMiddleware