import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const url = environment.apiurl;
    console.log('intercepted request ... ',url);

    // Clone the request to add the new header.

    if(req.method == "GET" && req.url != "api/v1/login")
    {
         req = req.clone({
             url:url +req.url,
            setHeaders:{'Accept':'application/json','x-access-token':localStorage.getItem('token')}
          });
    } 
    else
    {
        req = req.clone({
            url:url +req.url           
         });
        console.log('else Sending request with new header now ...',req);
    }   

    console.log('Sending request with new header now ...',req);

    //send the newly created request
    return next.handle(req);
  }
}