const contact = require('../models/contactModels')
const contactController = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(500).json({ message: "All fields are required" })
        }
        const newContact = await contact.create({
            name,
            email,
            message
        })

        return res.status(200).json({ message: "Your message has been sent" })
    } catch (error) {
        next(error)
    }
}

module.exports = contactController