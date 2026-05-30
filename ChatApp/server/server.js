const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/sequelize');
const { User } = require('./models/user');
const { Message } = require('./models/message');

app.use(express.json());
app.use(cors());

// Routers
const userRouter = require('./routers/user');
app.use('/user', userRouter);

const messageRouter = require('./routers/message');
app.use('/message', messageRouter);

// Relations
// const relationCall = () => {
//     // Göndərən
//     Message.belongsTo(User, {
//         as: "sender",
//         foreignKey: "senderId"
//     });

//     // Alan
//     Message.belongsTo(User, {
//         as: "receiver",
//         foreignKey: "receiverId"
//     });

//     // Bir istifadəçinin göndərdiyi mesajlar
//     User.hasMany(Message, {
//         as: "sentMessages",
//         foreignKey: "senderId"
//     });

//     // Bir istifadəçinin aldığı mesajlar
//     User.hasMany(Message, {
//         as: "receivedMessages",
//         foreignKey: "receiverId"
//     });
// };

// relationCall();
    
// // Sync
// (async () => {
//     await sequelize.sync({ force: true });
// })();

// --------------------------------------
// ⚡ SOCKET.IO hissəsi
// --------------------------------------
const http = require("http");
const { Server } = require("socket.io");

// Express serveri HTTP serverə çeviririk
const server = http.createServer(app);

// Socket server yaradılır
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

// Socket.io connections
io.on("connection", (socket) => {
    console.log("Client connected:", socket);

    socket.on("sendMessage", (data) => {
        console.log("Message received:", data);

        // Bütün client-lərə göndər
        io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// --------------------------------------
// 🚀 Server start
// --------------------------------------
server.listen(3000, () => {
    console.log("Server & Socket.io is running on port 3000");
});
