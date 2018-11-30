export * from './bundles.service';
import { BundlesService } from './bundles.service';
export * from './bundles.serviceInterface'
export * from './directories.service';
import { DirectoriesService } from './directories.service';
export * from './directories.serviceInterface'
export const APIS = [BundlesService, DirectoriesService];
