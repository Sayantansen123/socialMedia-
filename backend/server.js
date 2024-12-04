import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./db/connectDb.js"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from"./routes/postRoutes.js"

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json());//to parse json data in req.body
app.use(express.urlencoded({extended: false})); // to parse from data in the req body
app.use(cookieParser())


//routes
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>(console.log(`server started at port http://localhost:${PORT}`)));

