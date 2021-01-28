import express from 'express';
import { Server, Socket } from 'socket.io';

const PORT = process.env.PORT || 3002;

const app = express();

const appServer = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);

const io = new Server(appServer);

io.on('connection', (socket: Socket) => {
  console.log(`Socket connection established with id: ${socket.id}`);
});
