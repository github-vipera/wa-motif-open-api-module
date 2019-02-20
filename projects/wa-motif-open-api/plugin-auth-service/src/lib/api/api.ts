export * from './auth.service';
import { AuthService } from './auth.service';
export * from './auth.serviceInterface'
export * from './myself.service';
import { MyselfService } from './myself.service';
export * from './myself.serviceInterface'
export const APIS = [AuthService, MyselfService];
