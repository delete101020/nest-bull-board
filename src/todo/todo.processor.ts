import { Job } from 'bull';
import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';

@Processor('todo')
export class TodoProcessor {
  private readonly logger = new Logger(TodoProcessor.name);

  @Process('work')
  handleTranscode(job: Job) {
    this.logger.debug('Start working...');
    this.logger.debug(job.data);
    this.logger.debug('Work completed');
  }
}
