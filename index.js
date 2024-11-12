const express = require('express')
require('dotenv').config();
const cors = require('cors')
const errorMiddleware = require('./middlewares/errorMiddleware')

const db = require('./config/db')

const app = express();
const PORT = 3000
app.use(express.json());
app.use(cors())


const authRoute = require('./routes/authRoute')
app.use('/api', authRoute)


const contactRouter = require('./routes/contactRouter')
app.use('/api', contactRouter)


const adminRoute = require('./routes/adminRoute')
app.use('/api/admin', adminRoute)



app.use(errorMiddleware)

db().then(() => {
   app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
   });
}).catch((error) => {
   console.error("Failed to connect to the database:", error);
});
