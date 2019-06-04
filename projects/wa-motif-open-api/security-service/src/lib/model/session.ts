/**
 * Motif Security Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Session { 
    /**
     * Session ID
     */
    id: string;
    lastAccess: Date;
    /**
     * Whether this session is secure
     */
    secure: boolean;
    /**
     * Channel
     */
    channel: string;
    /**
     * Domain
     */
    domain: string;
    /**
     * Application
     */
    application: string;
    /**
     * User
     */
    user: string;
    /**
     * Last request ID
     */
    lastRequestId: number;
    /**
     * Expiry
     */
    expiry: string;
    /**
     * Client IP
     */
    clientIp: string;
    /**
     * Whether this session is shared between multiple users
     */
    shared: boolean;
}

