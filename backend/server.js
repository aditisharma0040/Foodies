import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//add congif
const app = express()
const port = 4000
// middleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB();
//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
  res.send("API Working")
})

app.listen(port,()=>{
  console.log(`Server Stared on http://localhost:${port}`)
})
//mongodb+srv://sharmaaditi142004:6Dyo7BQwkILeANde@cluster0.2yci3bp.mongodb.net/?