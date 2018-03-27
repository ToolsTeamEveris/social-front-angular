import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

//Custom modules
import { LoggedModule } from './logged/logged.module';

//Components
import { AppComponent } from './app.component';

//Services
import { AuthService } from './auth/services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { GeolacationService } from './shared-services/geolacation.service';
import { LogoutActivateGuardService } from './guards/logout-activate-guard.service';
import { LoginActivateGuardService } from './guards/login-activate-guard.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          canActivate: [LogoutActivateGuardService],
          loadChildren: './auth/auth.module#AuthModule'
        },
        { 
          path: 'logged', 
          canActivate: [LoginActivateGuardService],
          loadChildren: './logged/logged.module#LoggedModule' 
        },
        { 
          path: '**',
          redirectTo: '/auth/login'
        },
        {
          path: '', 
          redirectTo: '/auth/login',
          pathMatch: 'full'
        }
      ]
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    GeolacationService,
    LoginActivateGuardService,
    LogoutActivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
