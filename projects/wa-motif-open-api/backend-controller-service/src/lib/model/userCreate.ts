/**
 * Motif Backend Controller Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserCreateAllOf } from './userCreateAllOf';
import { UserData } from './userData';


export interface UserCreate { 
    userIdInt?: string;
    msisdn?: string;
    serial?: string;
    userId?: string;
    expiry?: string;
}

