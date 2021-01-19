import { Component, OnInit } from '@angular/core';


import { PatientObject } from '@app/_models';
import { AccountService } from '@app/_services';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { RootObject } from '@app/_models';
//import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpHeaders} from  '@angular/common/http';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({ 
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {
    user: any;
    dataSource: any;
    tableSearch:boolean;
    displayedColumns: string[] = ['Name','Display ID'];
    patientName = null;

    constructor(private accountService: AccountService,
        private http: HttpClient,
        private fb:FormBuilder,
        private route: ActivatedRoute,
        private router:Router) {
        this.user = this.accountService.userValue;
  
    }
    ngOnInit(): void {
        this.patientSearchForm=this.fb.group({name:['']});
    }

    patientSearchForm:FormGroup;

getSearchPatien() {

    this.accountService.login1(this.patientName)      
        .subscribe((response: any) => {
            console.log(response);
            this.dataSource = response.results;
            this.tableSearch=true;
        });
}

getFormData(){
    return this.patientSearchForm.controls;
}

getPatientInfo(patient){
    console.log(patient);
    this.router.navigate(['/info/'+patient.uuid]);
}
}
