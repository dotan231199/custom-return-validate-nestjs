import { Injectable } from '@nestjs/common';
import { CreateDemoValidateDto } from './dto/create-demo-validate.dto';
import { UpdateDemoValidateDto } from './dto/update-demo-validate.dto';

@Injectable()
export class DemoValidateService {
  create(createDemoValidateDto: CreateDemoValidateDto) {
    return 'This action adds a new demoValidate';
  }

  findAll() {
    return `This action returns all demoValidate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demoValidate`;
  }

  update(id: number, updateDemoValidateDto: UpdateDemoValidateDto) {
    return `This action updates a #${id} demoValidate`;
  }

  remove(id: number) {
    return `This action removes a #${id} demoValidate`;
  }
}
