import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: '';
  password: '';
  password2: '';
  errorMsg: '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.password === this.password2) {
      this.authService.register(this.username, this.password).subscribe(
        ok => this.router.navigate(['/auth/login']),
        error => this.errorMsg = error
      );
    }
  }

}
