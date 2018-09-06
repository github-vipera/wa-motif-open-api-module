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
 */

export interface OAuthRequest { 
    /**
     * OAuth2 Token
     */
    token: string;
    /**
     * Client Id
     */
    clientId: string;
    /**
     * ACCESS_TOKEN or REFRESH_TOKEN (if not set default is ACCESS_TOKEN)
     */
    tokenType?: string;
}