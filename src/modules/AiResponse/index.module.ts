import { Module } from '@nestjs/common';
import { AiResponseController } from './index.controller';
import { AiResponseService } from './index.service';

@Module({
  imports: [],
  providers: [AiResponseService],
  exports: [AiResponseService],
  controllers: [AiResponseController],
})
export class AiResponseModule {}
