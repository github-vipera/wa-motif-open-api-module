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


export interface HandshakeRequest { 
    /**
     * key pair id to which the public key belongs
     */
    kpid: string;
    ehkalgo: string;
    /**
     * Base64 encoded crypted handshake key
     */
    ehkencoded: string;
    /**
     * Padding used during encryption
     */
    ehktransformation?: string;
    /**
     * E2E decrypt/encrypt keys algorithm
     */
    e2ealgo: string;
}

