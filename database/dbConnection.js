import mongoose from "mongoose"; 

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL"
    }).then(() => {
        console.log('Connected to database!');
    }).catch((err) => {
        console.log(`Error connecting to database: ${err}`);
    });
};