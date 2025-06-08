const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors") 
const routes = require("./routers/indexRoutes")
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 1200

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log(`MongoDB connected...`)

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}) 


app.get("/", (req, res)=>{
    res.send("Welcome to FinTech payment system!")
})


app.use("/api", routes) 



