// src/config/connectDB.ts
import mongoose from 'mongoose';
import { constants } from '../helpers/constant';
export const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(constants.MONGO_URI);
        console.log(`✅ MongoDB connected: ${conn.connection.name}`);
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};
