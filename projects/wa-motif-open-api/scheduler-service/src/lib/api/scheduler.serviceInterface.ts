/**
 * Motif Scheduler Service API
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

import { ErrorVipera } from '../model/errorVipera';
import { ScheduledTask } from '../model/scheduledTask';
import { ScheduledTaskCreate } from '../model/scheduledTaskCreate';
import { ScheduledTaskEntity } from '../model/scheduledTaskEntity';
import { ScheduledTaskExecutionEntity } from '../model/scheduledTaskExecutionEntity';


import { Configuration }                                     from '../configuration';


export interface SchedulerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Adds a task to the scheduler
    * Adds a task to the scheduler
    * @param scheduledTaskCreate 
    */
    createTask(scheduledTaskCreate?: ScheduledTaskCreate, extraHttpRequestParams?: any): Observable<ScheduledTaskEntity>;

    /**
    * Removes a task from the scheduler
    * Removes a task from the scheduler
    * @param task 
    */
    deleteTask(task: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Disables a task
    * Disables a task
    * @param task 
    */
    disableTask(task: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Enables a task
    * Enables a task
    * @param task 
    */
    enableTask(task: string, extraHttpRequestParams?: any): Observable<object>;

    /**
    * Retrieves a scheduled task
    * Retrieves a scheduled task
    * @param task 
    */
    getTask(task: string, extraHttpRequestParams?: any): Observable<ScheduledTaskEntity>;

    /**
    * List task executions starting from last
    * List task executions starting from last
    * @param task 
    * @param taskExecResultCode 
    * @param page Page (omit to retrieve all records at once)
    * @param pageSize Page size
    * @param sort Sorting fields
    */
    getTaskExecutionsList(task: string, taskExecResultCode?: string, page?: number, pageSize?: number, sort?: string, extraHttpRequestParams?: any): Observable<Array<ScheduledTaskExecutionEntity>>;

    /**
    * Retrieves a list of scheduled tasks
    * Retrieves a list of scheduled tasks
    */
    getTaskList(extraHttpRequestParams?: any): Observable<Array<ScheduledTaskEntity>>;

    /**
    * Updates an already scheduled task
    * Updates an already scheduled task
    * @param task 
    * @param scheduledTask 
    */
    updateTask(task: string, scheduledTask?: ScheduledTask, extraHttpRequestParams?: any): Observable<object>;

}
