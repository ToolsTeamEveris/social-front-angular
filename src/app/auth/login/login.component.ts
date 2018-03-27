import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = '';
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        ok => this.router.navigate(['/logged']),
        error => this.errorMsg = error
      );
  }

  loggedGoogle(user: gapi.auth2.GoogleUser) {
    console.log(user.getAuthResponse(true));
    console.log(user.getAuthResponse().id_token);
    console.log(user.getBasicProfile().getName());
    console.log(user.getBasicProfile().getEmail());
    console.log(user.getBasicProfile().getImageUrl());

  }

}
