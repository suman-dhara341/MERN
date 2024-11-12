const mongoose=require('mongoose')

const db=async()=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log('DB connection successful');
    } catch (error) {
        console.log("DB connaction failed"),error;
    }
}

module.exports=db