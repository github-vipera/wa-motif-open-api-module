export * from './admins.service';
import { AdminsService } from './admins.service';
export * from './admins.serviceInterface'
export * from './clients.service';
import { ClientsService } from './clients.service';
export * from './clients.serviceInterface'
export * from './users.service';
import { UsersService } from './users.service';
export * from './users.serviceInterface'
export const APIS = [AdminsService, ClientsService, UsersService];
