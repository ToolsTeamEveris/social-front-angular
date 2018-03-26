import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

//Custom modules
import { LoggedModule } from './logged/logged.module';

//Components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/logged', pathMatch: 'full' },
        { path: 'logged', loadChildren: './logged/logged.module#LoggedModule' },
        { path: '**', redirectTo: '/logged', pathMatch: 'full' }
      ]
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
