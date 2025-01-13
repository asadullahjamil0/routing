import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public empId: any;
  public empName: any;
  constructor(private route: ActivatedRoute, private rout: Router) {

  }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let name = this.route.snapshot.paramMap.get('name');
    this.empId = id;
    this.empName = name;
  }
  nextEmp() {
    let nextId = parseInt(this.empId) + 1;
    this.rout.navigate(['/employee/', nextId,this.empName])
  }
  previuosEmp() {
    let prevId = parseInt(this.empId) - 1;
    this.router.navigate(['/employee/', prevId,this.empName])
  }

}
