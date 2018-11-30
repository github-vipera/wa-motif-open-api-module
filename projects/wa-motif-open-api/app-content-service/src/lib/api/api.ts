export * from './assets.service';
import { AssetsService } from './assets.service';
export * from './assets.serviceInterface'
export * from './engines.service';
import { EnginesService } from './engines.service';
export * from './engines.serviceInterface'
export const APIS = [AssetsService, EnginesService];
