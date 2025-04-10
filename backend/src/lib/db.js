import mongoose from 'mongoose'

export const connectDB=async()=>{
    try{
         const DBconnection=await mongoose.connect(process.env.MONGODB_URI)
         console.log(`Database connected:${DBconnection.connection.host}`)
    }
     catch(error){
        console.log("mongodb connection error:",error)
     }
}