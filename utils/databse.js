import mongoose, { mongo } from "mongoose";

let isConnected = false;

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "users",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("MongoDB is ready")
    } catch (error) {
        console.log(error);        
    }
}