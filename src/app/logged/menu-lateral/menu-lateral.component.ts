import { Persona } from './../shared/Entidades/persona';
import { PersonaServiceService } from './../shared/Services/persona-service.service';
import { Component, OnInit, Renderer } from '@angular/core';
import { PageUpdateduser } from '../shared/Services/updated-user';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  user: Persona;

  backgroundColor: string = '';
  font: string = '';

  open: boolean = false;

  constructor(private personaService: PersonaServiceService,
              private renderer: Renderer,
              private updateImageHeader: PageUpdateduser) { }

  ngOnInit() {
    this.personaService.getPersonByToken().subscribe(userLogged => {
      this.user = userLogged;
    });
  }

  actualizarColor() {
    this.user.userPreferences.backgroundColor = this.backgroundColor;
    this.updatePreferencesUser();
  }

  actualizarImagen(fileInput: HTMLInputElement) {
      if (!fileInput.files || fileInput.files.length === 0) {
          return;
      }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
          this.user.userPreferences.backgroundImage = reader.result
          this.updatePreferencesUser();

          this.updateImageHeader.setImagen(reader.result);
      });
  }

  actualizarFuente() {
    this.user.userPreferences.fontStyle = this.font;
    this.updatePreferencesUser();
  }
  
  updatePreferencesUser() {
    this.personaService.updateDataUser( this.user ).subscribe((user: Persona) => {
        this.renderer.setElementStyle(document.body, 'background-color', user.userPreferences.backgroundColor);
        this.renderer.setElementStyle(document.body, 'font-family', user.userPreferences.fontStyle);
    });
  }

  showHide() {
    let menuLateral = <HTMLDivElement>document.querySelector('.menu_lateral');
    if(!this.open) {
      menuLateral.classList.remove('close');
      menuLateral.classList.add('show');
      this.open = true;
    }else{
      menuLateral.classList.remove('show');
      menuLateral.classList.add('close');
      this.open = false;
    }

  }

}
