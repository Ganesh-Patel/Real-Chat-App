import express from "express";
import dotenv from 'dotenv/config';
import {Server} from "socket.io";
import cors from "cors";
import jwt from "jsonwebtoken"; 
import cookieParser from "cookie-parser";
import { createServer } from "http";
import UserRouter from "./Routes/userProfileRoute";

const secretJWT=process.env.SECERET;
const port=process.env.PORT;

const app = express();
const server = createServer();

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true,
    },
});

app.get("/user",UserRouter);


//sockets got all the information
io.use((socket,next)=>{
    cookieParser()(socket.request,socket.request.res,(err)=>{
        if(err)return next(err);
        const token=socket.request.cookies.token;
        if(!token)return next(new Error("Authentication failed or Err"));
        const decoded = jwt.verify(token,secretJWT);
    })
})

io.on("connection",(socket)=>{
    console.log("User connected",socket.id);
    socket.on("message",({room, message})=>{
        console.log({room, message});
        socket.to(room).emit("receive-message",message);
    });

    //user has joined this room
    socket.on("join-room",(room)=>{
        socket.join(room);
        console.log(`User joined room ${room}`);
    })
    //disconnection
    socket.on("disconnect",()=>{
        console.log("User disconnect",socket.id);
    });

})

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})




