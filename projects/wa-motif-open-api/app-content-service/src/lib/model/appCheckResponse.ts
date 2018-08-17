/**
 * Motif App Content Service API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface AppCheckResponse { 
    /**
     * Engine Name
     */
    name: string;
    /**
     * Engine last version
     */
    engineLastVersion: string;
    /**
     * Engine current version
     */
    engineCurVersion: string;
    /**
     * Asset last version
     */
    assetLastVersion: string;
    /**
     * Vipera-Serial for the app instance
     */
    viperaSerial?: string;
    /**
     * Download URL
     */
    downloadUrl?: string;
    /**
     * Send the hint to client to force engine update
     */
    engineForceUpdate: boolean;
}