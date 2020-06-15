import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './backend';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyInterceptor, ErrorInterceptor } from './backend';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { SignUpComponent } from './sign-up/sign-up.component'
;
import { CartComponent } from './cart/cart.component'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
         BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
          }),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
,
        SignUpComponent ,
        CartComponent   ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }