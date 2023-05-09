const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/authRoutes")
const imgRouter = require('./routes/imageRoutes')
const corsMiddleware = require("./middleware/cors.middleware")


const app = express();
const PORT = config.get('serverPort')

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/img",imgRouter)

const start = async () => {
    try{
        await mongoose.connect(config.get("dbURL"))

        app.listen(PORT, () => {
            console.log("server started on port: ", PORT);
        });
    }catch(e){
        console.log(e);
    }
}

start();