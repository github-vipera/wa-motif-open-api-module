/**
 * Motif Messaging Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@vipera.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ErrorVipera } from '../model/errorVipera';
import { SendData } from '../model/sendData';
import { SmsCreated } from '../model/smsCreated';


import { Configuration }                                     from '../configuration';


export interface MsgServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Sends a message to a destination URL
    * Sends a message to a destination URL
    * @param sendData 
    */
    send(sendData?: SendData, extraHttpRequestParams?: any): Observable<SmsCreated>;

}
