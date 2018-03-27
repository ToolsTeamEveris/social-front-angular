import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

//Custom modules
import { LoggedModule } from './logged/logged.module';

//Components
import { AppComponent } from './app.component';

//Interceptors
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { GeolacationService } from './shared-services/geolacation.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          loadChildren: './auth/auth.module#AuthModule'
        },
        { 
          path: 'logged', 
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
    GeolacationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
