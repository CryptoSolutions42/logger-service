import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer()
  server: Server;
  identity: string;

  constructor() {}

  setIdentity(_identity: string) {
    this.identity = _identity;
  }

  handleConnection(client: Socket) {
    client.join(`room-${this.identity}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  sendMessageToRoom(room: string, eventName: string, message: string) {
    this.server.to(room).emit(eventName, message);
  }
}
