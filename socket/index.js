import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000'
    }
});

let users = [];

const addUser = (userData, socketId) => {
    if (!users.some(user => user.sub === userData.sub)) {
        users.push({ ...userData, socketId });
    }
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
};

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    socket.on('disconnect', () => {
        removeUser(socket.id);
        io.emit("getUsers", users);
    });

    socket.on('sendMessage', data => {
        const user = getUser(data.receiverId);
        if (user) {
            io.to(user.socketId).emit('getMessage', data);
        } else {
            console.log('User not found'); // You might want to handle this case appropriately
        }
    });
});
