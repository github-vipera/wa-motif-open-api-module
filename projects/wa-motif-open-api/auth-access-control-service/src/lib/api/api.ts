export * from './groups.service';
import { GroupsService } from './groups.service';
export * from './permissions.service';
import { PermissionsService } from './permissions.service';
export * from './roles.service';
import { RolesService } from './roles.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [GroupsService, PermissionsService, RolesService, UsersService];
