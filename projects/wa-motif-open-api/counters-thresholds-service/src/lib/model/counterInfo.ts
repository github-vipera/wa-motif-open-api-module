/**
 * Motif Counters and Thresholds Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Counter Info can be assigned to an operation, to a service, to a service contexts or to an application (relation will be checked in this order)
 */
export interface CounterInfo { 
    name: string;
    enabled: boolean;
    description: string;
    fn: string;
    fnParams?: string;
    channel?: string;
    domain: string;
    application?: string;
    /**
     * if not null, also application is mandatory
     */
    service?: string;
    /**
     * if not null, also service and application are mandatory
     */
    operation?: string;
    /**
     * if not null, also application is mandatory. Used only if operation and service are null
     */
    serviceContext?: string;
}