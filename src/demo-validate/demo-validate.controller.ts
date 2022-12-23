import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemoValidateService } from './demo-validate.service';
import { CreateDemoValidateDto } from './dto/create-demo-validate.dto';
import { UpdateDemoValidateDto } from './dto/update-demo-validate.dto';

@Controller('demo-validate')
export class DemoValidateController {
  constructor(private readonly demoValidateService: DemoValidateService) {}

  @Post()
  create(@Body() createDemoValidateDto: CreateDemoValidateDto) {
    return this.demoValidateService.create(createDemoValidateDto);
  }

  @Get()
  findAll() {
    return this.demoValidateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoValidateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoValidateDto: UpdateDemoValidateDto) {
    return this.demoValidateService.update(+id, updateDemoValidateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoValidateService.remove(+id);
  }
}
