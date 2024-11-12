const adminMiddleware=async (req,res,next)=>{
    try {
        const user = req.user
        if (!user.isAdmin) {
            return res.status(500).json({ messaage: "Access denied" })
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware