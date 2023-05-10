const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/authRoutes")
const imgRouter = require('./routes/imageRoutes')
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRouter')
const corsMiddleware = require("./middleware/cors.middleware")
const bodyParser = require('body-parser');




const app = express();
const PORT = config.get('serverPort')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('static'))
app.use(corsMiddleware);
app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/auth", authRouter);
app.use("/api/img",imgRouter);
app.use("/api/post", postRouter)


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