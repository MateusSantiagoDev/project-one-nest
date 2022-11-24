import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): string {
    return "Servidor rodando em local http://localhost:3322/";
  }
}
