import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './_components/home';
// import { FilterPipe } from './filter.pipe';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';;
import { PatientInfoComponent } from './_components/patient-info/patient-info.component';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './_components/login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        MatButtonModule    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        // FilterPipe ,
        LoginComponent,
        PatientInfoComponent  ],
    providers: [
        //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };