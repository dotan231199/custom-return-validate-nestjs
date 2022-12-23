import { Test, TestingModule } from '@nestjs/testing';
import { DemoValidateController } from './demo-validate.controller';
import { DemoValidateService } from './demo-validate.service';

describe('DemoValidateController', () => {
  let controller: DemoValidateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoValidateController],
      providers: [DemoValidateService],
    }).compile();

    controller = module.get<DemoValidateController>(DemoValidateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
