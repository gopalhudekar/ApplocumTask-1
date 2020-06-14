import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_services/user';
import { verifyUser } from './_services/user';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
public currentUser: boolean=false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        localStorage.setItem('isLogin', "false");
        if( this.authenticationService.currentUserValue){
            this.currentUser = true;
        }
      
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        localStorage.setItem('isLogin', "false");
    }
}