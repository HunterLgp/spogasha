import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AiResponseService } from './index.service';

@Controller('ai-response')
@ApiTags('Amind')
export class AiResponseController {
  constructor(private aiResponseService: AiResponseService) {}
  @Get('list-response')
  async listCompany(): Promise<any> {
    return this.aiResponseService.list();
  }
}
