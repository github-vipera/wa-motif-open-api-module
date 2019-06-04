/**
 * Motif Configuration Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Setting } from './setting';


export interface SettingUpdate { 
    value?: string;
    type?: string;
    /**
     * true if when changed does not requires server restart
     */
    dynamic: boolean;
    /**
     * true if contains sensitive values such as passwords
     */
    crypted: boolean;
}

