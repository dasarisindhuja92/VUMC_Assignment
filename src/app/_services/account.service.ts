import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import{ HttpHeaders} from  '@angular/common/http';

import { environment } from '@environments/environment';
//import { User } from '@app/_models';
//import {RootObject} from '@app/_models';
//import { PatientObject } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<any>;
    public user: Observable<any>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): any {
        return this.userSubject.value;
    }

    login(username, password) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Origin': '*',
            'Authorization': "Basic "+ btoa(username +":"+password) });
        let options = { headers: headers };
        return this.http.get<any>(`http://localhost:8081/openmrs-standalone/ws/rest/v1/session`,options)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log("data::"+user);
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }
    login1(nameValue) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Origin': '*',
            'Authorization': "Basic "+ btoa('admin' +":"+'Admin123') });
        let options = { headers: headers };
        let name=nameValue;
        let value='default';
        let limit=50;


        return this.http.get<any>(`http://localhost:8081/openmrs-standalone/ws/rest/v1/patient?q=${name}&v=${value}&limit=${limit}`,options);
           
    }

    getPatientInfo(patientId) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Origin': '*',
            'Authorization': "Basic "+ btoa('admin' +":"+'Admin123') });
        let options = { headers: headers };
     


        //return this.http.get<any>(`http://localhost:8081/openmrs-standalone/ws/rest/v1/patient?q=${name}&v=${value}&limit=${limit}`,options);
        return this.http.get(`http://localhost:8081/openmrs-standalone/ws/rest/v1/patient/${patientId}?v=full`,options);
    }

    

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
       console.log(errorMessage);
       
      }
    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }

    
   


    
}