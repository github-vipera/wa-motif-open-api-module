/**
 * Motif Context Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ServiceContextCreate } from './serviceContextCreate';
import { ServiceContextValue } from './serviceContextValue';


export interface ServiceContext extends ServiceContextCreate { 
    domain: string;
    application: string;
    serviceOperationList?: Array<ServiceContextValue>;
}
