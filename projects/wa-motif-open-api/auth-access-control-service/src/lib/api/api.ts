export * from './cache.service';
import { CacheService } from './cache.service';
export * from './cache.serviceInterface'
export * from './groups.service';
import { GroupsService } from './groups.service';
export * from './groups.serviceInterface'
export * from './permissions.service';
import { PermissionsService } from './permissions.service';
export * from './permissions.serviceInterface'
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './roles.serviceInterface'
export * from './users.service';
import { UsersService } from './users.service';
export * from './users.serviceInterface'
export const APIS = [CacheService, GroupsService, PermissionsService, RolesService, UsersService];
