const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});



// password hash

userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        try {
            this.password = await bcrypt.hash(this.password, 10);
        } catch (error) {
            return next(error);
        }
    }
    next()
})


// password match

userSchema.methods.passwordCompare = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw new Error("Wrong Credential.");
    }
}


// token

userSchema.methods.generateAuthToken = function () {
    return token = jwt.sign(
        {
            userId: this._id,
            name: this.name,
            number: this.number,
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
}


const User = mongoose.model('User', userSchema);

module.exports = User;
