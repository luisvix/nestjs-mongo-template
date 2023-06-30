import { Controller, Get, Inject, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller({ version: VERSION_NEUTRAL })
export class AppController {
  constructor(private appService: AppService) {}

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('version')
  getVersion(): string {
    return this.appService.getVersion();
  }
}
