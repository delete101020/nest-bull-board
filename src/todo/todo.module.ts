import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoProcessor } from './todo.processor';
import { TodoService } from './todo.service';

@Module({
  imports: [BullModule.registerQueue({ name: 'todo' })],
  controllers: [TodoController],
  providers: [TodoService, TodoProcessor],
})
export class TodoModule {}
