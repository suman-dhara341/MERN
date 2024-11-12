const { z, number } = require("zod");

const loginValidator = z.object({
    number: z.string({ required_error: "Mobile number is required" })
        .min(10, { message: "Phone number must be at least 10 digits." })
        .max(20, { message: "Phone number must not exceed 20 digits." }),
    password: z.string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be at least 8 characters long." })
        .max(20, { message: "Password must not exceed 20 characters." })
})

const RegistrationValidator=loginValidator.extend({
    name: z.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters long." }),
    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email format." }),
})


module.exports = { loginValidator, RegistrationValidator }