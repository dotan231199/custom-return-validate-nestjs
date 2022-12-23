import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoValidateDto } from './create-demo-validate.dto';

export class UpdateDemoValidateDto extends PartialType(CreateDemoValidateDto) {}
