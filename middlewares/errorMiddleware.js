const errorMiddleware = (err, req, res, next) => {
    const message = err.errors[0].message || "Interneal Server Error"
    const status = err.status || 500;

    return res.status(status).json({ message: message })

};

module.exports = errorMiddleware;
