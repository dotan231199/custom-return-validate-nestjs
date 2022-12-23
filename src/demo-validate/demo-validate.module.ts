import { Module } from '@nestjs/common';
import { DemoValidateService } from './demo-validate.service';
import { DemoValidateController } from './demo-validate.controller';

@Module({
  controllers: [DemoValidateController],
  providers: [DemoValidateService]
})
export class DemoValidateModule {}
