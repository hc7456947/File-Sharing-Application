

import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI = `mongodb+srv://himanshu:hc7456947@file-sharing.n6hr7jv.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successful');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}


export default DBConnection;