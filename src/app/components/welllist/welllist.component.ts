import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-welllist',
  templateUrl: './welllist.component.html',
  styleUrls: ['./welllist.component.css']
})
export class WelllistComponent implements OnInit {

  listdata;
  sourcekey;
  constructor(private homeservice: HomeService) {
    this.listdata = this.homeservice.getrecords();
  }

  ngOnInit() {
  }


  getbgcolor(type) {
    switch (type) {
      case 'rls': return 'green';
      case 'esp': return 'pink';

    }
  }

  getcolor(type) {
    switch (type) {
      case 'rls': return 'brown';
      case 'esp': return 'black';
    }
  }


  sourceClick(data) {
    this.sourcekey = data.source;
  }

  newWellData(data) {
    console.log("data=>", data)
    this.listdata.push(data)
  }
}