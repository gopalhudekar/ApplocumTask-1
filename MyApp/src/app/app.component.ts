import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_services/user';
import { verifyUser } from './_services/user';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    public currentUser: verifyUser;
    public isLogin : boolean =false;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        console.log( 'app componet this.currentUser:',this.currentUser);
        localStorage.setItem('isLogin', "false");
        if (JSON.parse(localStorage.getItem('isLogin'))) {
            this.isLogin = true;
        }

    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem('isLogin'))) {
            this.isLogin = true;
        }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        localStorage.setItem('isLogin', "false");
    }
}