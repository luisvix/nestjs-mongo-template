import { describe, it, expect, beforeEach } from 'vitest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { version } from '../package.json';
import { tokens } from './config/constants';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: tokens.appService, useClass: AppService }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health', () => {
    it('should return OK', () => {
      expect(appController.getHealth()).toBe('OK');
    });
  });

  describe('version', () => {
    it('should return current version', () => {
      expect(appController.getVersion()).toBe(version);
    });
  });
});
