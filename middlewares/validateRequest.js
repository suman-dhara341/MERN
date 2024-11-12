const validateRequest = (schema) => async (req, res, next) => {
    try {
        schema.parse(req.body);
        next()
    } catch (error) {
        next(error)

    }
}

module.exports = validateRequest