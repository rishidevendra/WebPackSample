import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule        
    ],
    declarations: [AppComponent       
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
       
    ]
})

export class AppModule {
    // Diagnostic only: inspect router configuration
    //constructor(router: Router) {
    //    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    //}
}


