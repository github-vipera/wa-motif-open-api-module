export * from './configurations.service';
import { ConfigurationsService } from './configurations.service';
export * from './settings.service';
import { SettingsService } from './settings.service';
export const APIS = [ConfigurationsService, SettingsService];
