/**
 * Motif Configuration Service API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Setting } from './setting';


export interface SettingEntity extends Setting { 
    name: string;
    serviceId: string;
    tag?: string;
    lastMod?: Date;
}