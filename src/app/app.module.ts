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
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { Http } from '@angular/http';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      isolate: false
  })
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
  bootstrap: [AppComponent],
  exports: [
    TranslateModule
  ]
})
export class AppModule { }
