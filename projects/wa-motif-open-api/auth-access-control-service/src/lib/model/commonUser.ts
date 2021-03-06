/**
 * Motif Auth Access Control Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BaseUser } from './baseUser';
import { CommonUserAllOf } from './commonUserAllOf';


export interface CommonUser { 
    domain: string;
    userId: string;
    locale?: string;
    state?: string;
    prevState?: string;
    email?: string;
    created?: Date;
    lastLogin?: Date;
    userIdInt?: string;
    msisdn?: string;
    serial?: string;
}

