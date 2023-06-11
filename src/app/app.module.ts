import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotloginComponent } from './forgotlogin/forgotlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    SignupComponent,
    ForgotloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
