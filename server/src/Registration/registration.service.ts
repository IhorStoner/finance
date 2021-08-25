import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationService {
  createNewUser(): string {
    return 'New User';
  }
}
