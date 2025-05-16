import mongoose from "mongoose";
export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://sharmaaditi142004:6Dyo7BQwkILeANde@cluster0.2yci3bp.mongodb.net/foodies').then(()=>console.log("DB Connected"));
}
