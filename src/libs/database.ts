import mongoose from "mongoose";
import env from "../configs/env";

const databaseUrl = env.databaseUrl ? env.databaseUrl : 'mongodb://localhost:27017/';

export default mongoose.connect(databaseUrl);

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error:', error);
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
