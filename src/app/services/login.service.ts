import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

getrecords()
  {
   
    const details=[{"pass":"test","username":"rest"},{"pass":"test","username":"xyz"},{"pass":"test","username":"abcd"}];    
    
    return details;

  }

  getsamplerecord(payload)
  {
    console.log("payload9++++++++++++",payload)
    return this.httpClient.post('api/v1/login',payload);
  }
  
}