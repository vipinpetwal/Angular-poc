import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filelist;
  constructor(private homeservice: HomeService) {
  }

  ngOnInit() {
  }

  checkFile(filename) {
    this.homeservice.getFilerecord({ name: filename }).subscribe((response: any) => {
      console.log("resposnse====>", response)
      if (response && response.Arrayofresponse) {
        this.filelist = response.Arrayofresponse;
      }

    });
  }
}