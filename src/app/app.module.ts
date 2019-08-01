import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { FirstcompComponent } from './components/firstcomp/firstcomp.component';
import { WelllistComponent } from './components/welllist/welllist.component';

import { HomeService } from './services/home.service';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { Interceptor } from './interceptor'
import { AuthGuard } from './auth.guard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WellComponent } from './components/well/well.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragdropService } from './services/dragdrop.service';
import { ButtonComponent } from './components/button/button.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragdropDirective } from './dragdrop.directive';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    FirstcompComponent,
    LoginComponent,
    WelllistComponent,
    WellComponent,
    DragdropComponent,
    ButtonComponent,
    TextboxComponent,
    HeaderComponent,
    FooterComponent,
    DragdropDirective,
    SearchComponent
  ],
  entryComponents: [ ButtonComponent,TextboxComponent,HeaderComponent,FooterComponent],
  bootstrap: [AppComponent],
  providers: [
    HomeService,
    LoginService,
    DragdropService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true
    },
    AuthGuard

  ]
})
export class AppModule { }
