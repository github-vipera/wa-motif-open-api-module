export * from './appinstances.service';
import { AppinstancesService } from './appinstances.service';
export * from './appinstances.serviceInterface'
export * from './applications.service';
import { ApplicationsService } from './applications.service';
export * from './applications.serviceInterface'
export * from './channels.service';
import { ChannelsService } from './channels.service';
export * from './channels.serviceInterface'
export * from './clients.service';
import { ClientsService } from './clients.service';
export * from './clients.serviceInterface'
export * from './domains.service';
import { DomainsService } from './domains.service';
export * from './domains.serviceInterface'
export * from './locales.service';
import { LocalesService } from './locales.service';
export * from './locales.serviceInterface'
export * from './system.service';
import { SystemService } from './system.service';
export * from './system.serviceInterface'
export const APIS = [AppinstancesService, ApplicationsService, ChannelsService, ClientsService, DomainsService, LocalesService, SystemService];
