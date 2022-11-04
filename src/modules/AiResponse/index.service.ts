import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AiResponseRepository } from 'src/models/repositories/aiResponse.repository';

@Injectable()
export class AiResponseService {
  constructor(
    @InjectRepository(AiResponseRepository)
    private readonly aiResponseRepositoryReport: AiResponseRepository,
  ) {}
  async list() {
    return [{ test: 'hello' }];
  }
}
