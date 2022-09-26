import * as Queue from 'bull';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const expressAdapter = new ExpressAdapter();
  expressAdapter.setBasePath('/admin/queues');

  const todoQueue = new Queue('todo');
  createBullBoard({
    queues: [new BullAdapter(todoQueue)],
    serverAdapter: expressAdapter,
  });

  app.use('/admin/queues', expressAdapter.getRouter());
  await app.listen(3000);
}
bootstrap();
