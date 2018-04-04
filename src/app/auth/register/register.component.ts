import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { Persona } from '../../logged/shared/Entidades/persona';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  person : Persona = {
    name: '',
    surname: '',
    username: '',
    picture: '',
    password: '',
    password2: ''
  }
  errorMsg: String = '';

  touched = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.person.password === this.person.password2) {
      this.authService.register(this.person).subscribe(
        ok => this.router.navigate(['/auth/login']),
        error => this.errorMsg = error
      );
    } else {
      this.errorMsg = 'Las contraseñas deben coincidir';
      this.person.password = '';
      this.person.password2 = '';
    }
  }

  //Convert image to base64
  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
        this.person.picture = reader.result;
    });
  }
  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    if (ngModel.touched) {
      this.touched = true;
    }
    return {
        [validClass]: ngModel.touched && ngModel.valid,
        [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

}
