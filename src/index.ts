import cors from "cors";
import express, { Request, Response } from "express";
import { connectDB } from "./db/db.connection";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Server is up and running.");
    return;
});


const PORT = process.env.PORT || 3500;
connectDB()
    .then(() => {
        // Start the server and listen on the specified port
        app.listen(PORT, () => {
            console.log(`✅ Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("error in data base connection:", err);
    });