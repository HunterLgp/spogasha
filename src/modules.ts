import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';

import { AiResponseModule } from './modules/AiResponse/index.module';
import { masterConfig } from './configs/database.config';
const Modules = [Logger, TypeOrmModule.forRoot(masterConfig), AiResponseModule];
export default Modules;
