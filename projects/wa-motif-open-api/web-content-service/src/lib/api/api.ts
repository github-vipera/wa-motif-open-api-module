export * from './bundles.service';
import { BundlesService } from './bundles.service';
export * from './bundles.serviceInterface'
export * from './contexts.service';
import { ContextsService } from './contexts.service';
export * from './contexts.serviceInterface'
export const APIS = [BundlesService, ContextsService];
