import { RegisterComponent } from '../register/register.component';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PreventRegister implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private alertify: AlertifyService
      ) {}
    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            this.router.navigate(['home']);
            this.alertify.error('You can not access this area now');
        }
        return true;
    }
}