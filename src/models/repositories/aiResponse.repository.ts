import { EntityRepository, Repository } from 'typeorm';
import { AiResponseEntity } from '../entities/aiResponse.entity';

@EntityRepository(AiResponseEntity)
export class AiResponseRepository extends Repository<AiResponseEntity> {}
