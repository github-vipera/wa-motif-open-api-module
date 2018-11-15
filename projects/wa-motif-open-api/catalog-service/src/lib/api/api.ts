export * from './applications.service';
import { ApplicationsService } from './applications.service';
export * from './applications.serviceInterface'
export * from './operations.service';
import { OperationsService } from './operations.service';
export * from './operations.serviceInterface'
export * from './services.service';
import { ServicesService } from './services.service';
export * from './services.serviceInterface'
export const APIS = [ApplicationsService, OperationsService, ServicesService];
