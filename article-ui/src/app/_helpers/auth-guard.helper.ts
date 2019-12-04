import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardHelper implements CanActivate {

  constructor(
  	private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userAuth = this.authenticationService.isLoggedIn();
  	if (userAuth) {
    	// logged in
      return true;
    }

    // redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}