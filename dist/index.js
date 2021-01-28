"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var PORT = process.env.PORT || 3002;
var app = express_1.default();
var appServer = app.listen(PORT, function () {
    return console.log("Server listening on port " + PORT);
});
var io = new socket_io_1.Server(appServer);
io.on('connection', function (socket) {
    console.log("Socket connection established with id: " + socket.id);
});
