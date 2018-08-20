import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { MotifConnectorService, AuthService } from 'web-console-core'
import { Observable} from "rxjs";

/*
import {tap} from 'rxjs/operators'

export const TOKEN_NOT_AVAILABLE:string = "TOKEN_NOT_AVAILABLE";
export const LOGIN_PATH:string = '/oauth2/token';
*/

@Injectable()
export class MotifCommunicatoriTestHelper {

    public motifConnector:MotifConnectorService;
    public authService:AuthService;

    constructor(private http:HttpClient){
        this.motifConnector = new MotifConnectorService(http);
        this.authService = new AuthService(http, 'http://ec2-34-209-90-152.us-west-2.compute.amazonaws.com:8080', null, null);
    }

    public login(userName:string, password:string):Observable<any>{
        return this.authService.login({userName:userName, password:password});
    }

    /*
    public login(userName:string, password:string):Observable<any>{
        console.log("*************************** motifCommunicatoriTestHelper sending login...", this.authService);
        return this.authService.login({userName:'admin', password:'admin'})

        let httpParams = new HttpParams()
        .append("username", userName)
        .append("password", password)
        .append("client_id", "123456789")
        .append("client_secret", "123456789")
        .append("grant_type", "password");
    
        return this.motifConnector.post(LOGIN_PATH,httpParams).pipe(
            tap((resp) => {
                console.log("login",resp)
                let token = resp.access_token;
                let refreshToken = resp.refresh_token;
                this.setToken(token);
                this.onAuthorizationSuccess();
            },(err) => {
                console.log("login error",err);
            }
        ));

    }

    public setToken(value:string):void{
        let data=this.createTokenData(value);
        localStorage.setItem(AUTH_TOKEN_KEY,JSON.stringify(data))   
    }

    public getToken():string{
        let data:TokenData = JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY));
        return data != null ? data.token : null;
    }
*/
    
}
