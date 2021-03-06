/**
 * Motif End 2 End Encryption Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface HandshakeResponse { 
    /**
     * Base64 encoded crypted request key
     */
    rkenckey: string;
    /**
     * Request key encryption algorithm
     */
    rkalgo: string;
    /**
     * Request key encryption format
     */
    rkformat: string;
    /**
     * Request key encryption param specs
     */
    rkparamspec: string;
    /**
     * Request key encryption padding
     */
    rkpadding: string;
    /**
     * Base64 encoded crypted reply key
     */
    rrkenckey: string;
    /**
     * Reply key encryption algorithm
     */
    rrkalgo: string;
    /**
     * Reply key encryption format
     */
    rrkformat: string;
    /**
     * Reply key encryption param specs
     */
    rrkparamspec: string;
    /**
     * Reply key encryption padding
     */
    rrkpadding: string;
    /**
     * E2E conversation ID
     */
    convid: string;
}

