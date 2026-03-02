import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class UserService {
  test(): any[] {
    return [];
  }

}
