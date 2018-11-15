export * from './configurations.service';
import { ConfigurationsService } from './configurations.service';
export * from './configurations.serviceInterface'
export * from './settings.service';
import { SettingsService } from './settings.service';
export * from './settings.serviceInterface'
export const APIS = [ConfigurationsService, SettingsService];
