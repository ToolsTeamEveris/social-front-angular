import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
