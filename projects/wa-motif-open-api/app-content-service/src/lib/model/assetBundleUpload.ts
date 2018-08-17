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

export interface AssetBundleUpload { 
    /**
     * Asset bundle in ZIP format
     */
    file: string;
    /**
     * Whether to overwrite any existing bundle with same domain, name and version
     */
    overwrite?: boolean;
    /**
     * Whether to publish the bundle immediately
     */
    publish?: boolean;
}