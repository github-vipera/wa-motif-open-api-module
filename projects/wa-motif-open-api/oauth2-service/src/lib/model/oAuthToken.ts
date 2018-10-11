/**
 * Motif OAuth2 Service API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { UserKey } from './userKey';


export interface OAuthToken extends UserKey { 
    /**
     * Client ID
     */
    clientId?: string;
    /**
     * OAuth2 Token
     */
    token: string;
    /**
     * ACCESS_TOKEN or REFRESH_TOKEN
     */
    tokenType: string;
    /**
     * Creation timestamp
     */
    createTime?: Date;
    /**
     * Expiry timestamp
     */
    expiryTime?: Date;
}