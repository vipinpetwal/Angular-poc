import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { FirstcompComponent } from './components/firstcomp/firstcomp.component';
import { HomeService } from './services/home.service';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import {Interceptor} from './interceptor'
import { AuthGuard } from './auth.guard';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, FirstcompComponent, LoginComponent],
  bootstrap: [AppComponent],
  providers: [  
    HomeService,
    LoginService,  
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,useClass: Interceptor,multi: true
    },
    AuthGuard

  ]
})
export class AppModule { }
