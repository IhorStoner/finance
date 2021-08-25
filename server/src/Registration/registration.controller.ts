import { Controller, Get } from '@nestjs/common';
import { RegistrationService } from './registration.service';

@Controller('/api')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get('/registration')
  createNewUser(): string {
    return this.registrationService.createNewUser();
  }
}
