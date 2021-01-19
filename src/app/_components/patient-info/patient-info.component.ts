import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  public result:any;
  dataSource: any;
  displayedColumns: string[] = ['Name','Age','Gender','DOB','Address','DisplayID'];

  constructor(private route: ActivatedRoute,
    private accountService: AccountService) {
      this.accountService.getPatientInfo(this.route.snapshot.paramMap.get('patientId'))
      .subscribe((response: any) => {
        console.log(response);
        var arr = [];
        this.result=response;
        arr.push(response)
        this.dataSource = arr;    
    });
     }

  ngOnInit(): void {
  }

}
