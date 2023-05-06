const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")

const app = express();
const PORT = config.get('serverPort')

app.use(express.json);
app.use("/api/auth", authRouter);

const start = async () => {
    try{
        mongoose.connect(config.get("dbURL"))

        app.listen(PORT, () => {
            console.log("server started on port: ", PORT);
        });
    }catch(e){

    }
}

start()