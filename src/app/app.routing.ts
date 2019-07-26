import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstcompComponent } from './components/firstcomp/firstcomp.component';
import { WelllistComponent } from './components/welllist/welllist.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  //{ path:'home',component: FirstcompComponent , canActivate:[AuthGuard]},
  { path:'home',component: WelllistComponent , canActivate:[AuthGuard]},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 