import { Test, TestingModule } from '@nestjs/testing';
import { DemoValidateService } from './demo-validate.service';

describe('DemoValidateService', () => {
  let service: DemoValidateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoValidateService],
    }).compile();

    service = module.get<DemoValidateService>(DemoValidateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
