import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getFilerecord(payload)
  {
    console.log("payload====>",payload)
    return this.httpClient.post('api/v1/displayfilelist',payload);
  }


  getrecords()
  {
    const displaydata = [{ "name": "TestRLSWell01", "type": "rls", "source": "1000001" }, { "name": "TestESPWell01", "type": "esp", "source": "1000002" }, { "name": "TestRLSWell01", "type": "rls", "source": "1000003" }];
    
    return displaydata;
  }


  getemprecord()
  {
    console.log("payload++++++++++++")
    return this.httpClient.get('api/v1/displaydata');
  }

}
