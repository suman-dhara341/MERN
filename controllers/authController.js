const user = require('../models/authModels')

const registration = async (req, res) => {

    try {
        const { name, number, email, password } = req.body;

        if (!name || !number || !email || !password) {
            return res.status(500).json({ message: "All fields are required" })
        }

        const numberFind = await user.findOne({ number })
        if (numberFind) {
            return res.status(500).json({ message: "This mobile number is already registered" })
        }
        const emailFind = await user.findOne({ email })
        if (emailFind) {
            return res.status(500).json({ message: "This email is already registered" })
        }


        const newUser = await user.create({
            name,
            number,
            email,
            password
        })

        const authToken = await newUser.generateAuthToken();


        return res.status(200).json({ message: "SignUp Successful", authToken })


    } catch (error) {
        return res.status(500).json({ message: "Registration Problems" })
    }
}





const login = async (req, res) => {
    try {
        const { number, password } = req.body
        if (!number || !password) {
            return res.status(500).json({ message: "All fields are required" })
        }

        const findUser = await user.findOne({ number })
        if (!findUser) {
            return res.status(500).json({ message: "Wrong Credential" })
        }

        const passwordMatch = await findUser.passwordCompare(password);

        if (!passwordMatch) {
            return res.status(500).json({ message: "Wrong Credential" })
        }

        const authToken = await findUser.generateAuthToken()

        return res.status(200).json({ message: "Login Successful", authToken })


    } catch (error) {
        return res.status(500).json({ message: "Login Problems" })
    }
}




const userData = async (req, res) => {
    try {
        const userData = req.user
        res.status(200).json({ userData })
    } catch (error) {
        return res.status(500).json({ message: "Invalid user" })

    }
}



module.exports = { registration, login, userData }