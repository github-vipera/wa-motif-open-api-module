export * from './attributes.service';
import { AttributesService } from './attributes.service';
export * from './attributes.serviceInterface'
export * from './contexts.service';
import { ContextsService } from './contexts.service';
export * from './contexts.serviceInterface'
export * from './values.service';
import { ValuesService } from './values.service';
export * from './values.serviceInterface'
export const APIS = [AttributesService, ContextsService, ValuesService];
