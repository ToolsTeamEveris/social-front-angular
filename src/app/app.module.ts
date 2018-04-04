import { PersonaServiceService } from './logged/shared/Services/persona-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

//Custom modules
import { LoggedModule } from './logged/logged.module';

//Components
import { AppComponent } from './app.component';

//Interceptors
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
//Services
import { AuthService } from './auth/services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { GeolacationService } from './shared-services/geolacation.service';

import { LogoutActivateGuardService } from './guards/logout-activate-guard.service';
import { LoginActivateGuardService } from './guards/login-activate-guard.service';

import { GoogleLoginModule } from './google-login/google-login.module';
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment';
import { PageUpdateduser } from './logged/shared/Services/updated-user';

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
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
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
    LogoutActivateGuardService,
    PersonaServiceService,
    PageUpdateduser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
