import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {

  listemp;
  constructor(private router: Router,private homeservice: HomeService) {

    this.homeservice.getemprecord().subscribe((responsedata: any) => {
      if (responsedata && responsedata.response) {
        this.listemp = responsedata.response
      }
    });
  }

  ngOnInit() {
  }


  logoutclick()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}