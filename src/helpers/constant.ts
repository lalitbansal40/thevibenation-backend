import * as dotenv from "dotenv";
dotenv.config();

export const constants = {
    MONGO_URI: String(process.env.MONGO_URI)
}