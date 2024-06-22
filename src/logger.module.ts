import { Module } from '@nestjs/common';
import { LoggerController } from 'logger.controller';
import { SocketGateway } from 'socket/socket.gateway';

@Module({
  imports: [],
  controllers: [LoggerController],
  providers: [SocketGateway],
})
export class LoggerModule {}
