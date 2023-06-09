import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotloginComponent } from './forgotlogin/forgotlogin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent },
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotlogin', component: ForgotloginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
