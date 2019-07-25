import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) { }


  getrecords()
  {
    const test=[{"id":1,"name":"rest"},{"id":2,"name":"xyz"},{"id":3,"name":"abcd"}]
    
    return test;
  }


  getemprecord()
  {
    console.log("payload9++++++++++++")
    return this.httpClient.get('api/v1/displaydata');
  }

}