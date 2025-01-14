import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public empId: any;
  public empName: any;
  constructor(private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.empId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.empId = id;
    })
  }
  nextMap() {
    let nextId = parseInt(this.empId) + 1;
    this.router.navigate(['/employee/', nextId])
  }
  previuosEmp() {
    let prevId = parseInt(this.empId) - 1;
    this.router.navigate(['/employee/', prevId])
  }

}
