import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class LogoutActivateGuardService implements CanActivate {

  constructor(private auth: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.auth.isLogged().map(response => {
      if (response) {
        this.router.navigate(['/logged']);
        return false;
      } else
        return true;
    });
  }

}
