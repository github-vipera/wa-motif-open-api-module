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
 */import { AssetBundle } from './assetBundle';


export interface AssetBundleEntity extends AssetBundle { 
    /**
     * Asset Bundle Name
     */
    name: string;
    /**
     * ViperaOSGi domain
     */
    domain: string;
    /**
     * Asset Bundle version
     */
    version: string;
    /**
     * Asset Bundle creation timestamp
     */
    created?: Date;
    /**
     * Last App check request timestamp
     */
    lastAppCheck?: Date;
    /**
     * Original bundle ZIP data
     */
    zipData?: string;
    /**
     * Original bundle ZIP file name
     */
    zipFileName?: string;
    /**
     * Bundle requires this app version
     */
    requiredAppVer?: string;
}