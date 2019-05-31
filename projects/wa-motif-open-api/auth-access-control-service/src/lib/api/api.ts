export * from './groups.service';
import { GroupsService } from './groups.service';
export * from './groups.serviceInterface'
export * from './myself.service';
import { MyselfService } from './myself.service';
export * from './myself.serviceInterface'
export * from './permissions.service';
import { PermissionsService } from './permissions.service';
export * from './permissions.serviceInterface'
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './roles.serviceInterface'
export * from './users.service';
import { UsersService } from './users.service';
export * from './users.serviceInterface'
export const APIS = [GroupsService, MyselfService, PermissionsService, RolesService, UsersService];
