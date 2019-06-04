/**
 * Motif User Manager Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ClientUser } from '../model/clientUser';
import { ClientUserCreate } from '../model/clientUserCreate';
import { ClientUserUpdate } from '../model/clientUserUpdate';
import { CredentialsCreate } from '../model/credentialsCreate';
import { CredentialsUpdate } from '../model/credentialsUpdate';
import { ErrorVipera } from '../model/errorVipera';


import { Configuration }                                     from '../configuration';


export interface ClientsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a client user
    * Creates a client user
    * @param domain Domain Name
    * @param clientUserCreate 
    */
    createClientUser(domain: string, clientUserCreate?: ClientUserCreate, extraHttpRequestParams?: any): Observable<ClientUser>;

    /**
    * Creates client user credentials
    * Creates client user credentials
    * @param domain Domain Name
    * @param userId User Id
    * @param credentialsCreate 
    */
    createClientUserCredentials(domain: string, userId: string, credentialsCreate?: CredentialsCreate, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Deletes a client user
    * Deletes a client user
    * @param domain Domain Name
    * @param userId User Id
    */
    deleteClientUser(domain: string, userId: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Retrieves client user
    * Retrieves client user
    * @param domain Domain Name
    * @param userId User Id
    */
    getClientUser(domain: string, userId: string, extraHttpRequestParams?: any): Observable<ClientUser>;

    /**
    * Retrieves client users list
    * Retrieves client users list
    * @param domain Domain Name
    */
    getClientUsersList(domain: string, extraHttpRequestParams?: any): Observable<Array<ClientUser>>;

    /**
    * Updates a client user
    * Updates a client user
    * @param domain Domain Name
    * @param userId User Id
    * @param clientUserUpdate 
    */
    updateClientUser(domain: string, userId: string, clientUserUpdate?: ClientUserUpdate, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Updates client user credentials
    * Updates client user credentials
    * @param domain Domain Name
    * @param userId User Id
    * @param credentialsUpdate 
    */
    updateClientUserCredentials(domain: string, userId: string, credentialsUpdate?: CredentialsUpdate, extraHttpRequestParams?: any): Observable<object>;

}
