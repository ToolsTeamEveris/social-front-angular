import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleLoginModule } from '../google-login/google-login.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]),
    GoogleLoginModule.forRoot('269115313905-om54ugojq4p7huf2d1pmm2a28i8377sl.apps.googleusercontent.com'),
    TranslateModule.forChild()
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
 
  ]
})
export class AuthModule { }
