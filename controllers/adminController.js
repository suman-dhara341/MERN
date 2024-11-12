const users = require('../models/authModels')
const contacts = require('../models/contactModels')
const adminGetUsers = async (req, res, next) => {
    try {
        const getUsers = await users.find()
        return res.status(200).json({ message: getUsers })

    } catch (error) {
        next(error)
    }
}


const adminGetContact = async (req, res, next) => {
    try {
        const getUsers = await contacts.find()
        return res.status(200).json({ message: getUsers })

    } catch (error) {
        return res.status(500).json({ message: "User get problem" })
    }
}


const adminDeleteUsers = async (req, res, next) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(200).json({ message: "ID is required" })

        }
        const deletedUser = await users.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(500).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" })


    } catch (error) {
        return res.status(500).json({ message: "User delete problem" })
    }
}




const adminEditGetUsers = async (req, res) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(200).json({ message: "ID is required" })
        }
        const findUser = await users.findOne({ _id: id }, { password: 0 });

        if (!findUser) {
            return res.status(500).json({ message: "User not found" });
        }
        return res.status(200).json({ message: findUser })
    } catch (error) {
        return res.status(500).json({ message: "User get problem" })
    }
}



const adminUpdateUsers = async (req, res) => {
    try {
        const id = req.params.id
        const { name, number, email } = req.body
        if (!id) {
            return res.status(500).json({ message: "ID is required" })
        }
        if (!name || !number || !email) {
            return res.status(500).json({ message: "All fields are required" });
        }

        const update = await users.updateOne(
            { _id: id },
            {
                $set: {
                    name,
                    number,
                    email
                }
            }
        )

        return res.status(200).json({ message: "User updated successfully" });

    } catch (error) {
        return res.status(500).json({ message: "User update problem and duplicate Mobile number or gmail" })

    }


}

const deleteContact = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        if (!id) {
            return res.status(500).json({ message: "ID is required" })
        }

        const contact = await contacts.findByIdAndDelete({ _id: id })
        
        if (!contact) {
            return res.status(500).json({ message: "User not found" })
        }

        return res.status(200).json({ message: "User deleted successfully" })


    } catch (error) {
        return res.status(500).json({ message: "Message deleted problem" })
    }
}





module.exports = { adminGetUsers, adminGetContact, adminDeleteUsers, adminEditGetUsers, adminUpdateUsers, deleteContact }