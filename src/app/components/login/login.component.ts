import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import * as _ from "lodash";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errmsg : boolean=false;
  result;  
  constructor(private router: Router, private loginservice: LoginService) {
  }

  ngOnInit() {
    if (localStorage.getItem("login") === "1") {     
      this.router.navigate(['/home']);
    }  
  }

  onSubmit(formdata) {       
    const payload = { name: formdata.username, pass: formdata.password }
    this.loginservice.getsamplerecord(payload).subscribe((response: any) => {
      console.log("response=======>", response)
      if (response && response.code === "1") {        
        localStorage.setItem("login",response.code);
        localStorage.setItem("token",response.access_token);
        this.router.navigate(['/home']);
      }
      else
      {
        this.errmsg=true;
      }

    })


  }

}