import { InjectQueue } from '@nestjs/bull';
import { Controller, Get } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('todo')
export class TodoController {
  constructor(@InjectQueue('todo') private readonly todoQueue: Queue) {}

  @Get('work')
  async work() {
    for (let i = 0; i < 100; i++) {
      await this.todoQueue.add('work', {
        index: i,
        name: 'todo',
      });
    }
  }
}
