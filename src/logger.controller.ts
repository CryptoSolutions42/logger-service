import { Body, Controller, Post } from '@nestjs/common';
import { SocketGateway } from 'socket/socket.gateway';
// import { SocketService } from 'socket/socket.service';
import { LoggerType } from 'types/types';

@Controller()
export class LoggerController {
  logs: LoggerType[] = [];

  constructor(private _socket: SocketGateway) {}

  @Post('/logger')
  addNewLog(
    @Body()
    {
      ident,
      product,
      log,
    }: {
      ident: string;
      product: string;
      log: LoggerType;
    },
  ) {
    console.log('work');
    this._socket.setIdentity(ident);
    if (!log) {
      return;
    }
    console.log(log);
    const identity = this._socket.identity;
    console.log('identity => ', identity);
    this._socket.sendMessageToRoom(
      `room-${identity}`,
      `log-${product}`,
      JSON.stringify(log),
    );

    return identity;
    // this._socket.sendMessage(JSON.stringify(message));
  }

  private _generateIdentity(length = 12): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
