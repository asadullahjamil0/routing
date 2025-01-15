import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  public selectedId: any;

  myEmployee = [
    { 'id': 1, name: "AsadUllah" },
    { 'id': 2, name: "Abdullah" },
    { 'id': 3, name: "Naseem" },
    { 'id': 4, name: "Babar" },
    { 'id': 5, name: "Khalid" }
  ]

  constructor(private route: Router, private router: ActivatedRoute) {

  }
  empClick(employee: any) {
    // this.route.navigate(['/employee/'+ employee.id, employee.name]);
    this.route.navigate(['/employee', employee.id]);
    // this.route.navigate(['/employee', employee.id])
  }
  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
    })
  }
  isSelected(employee: any) {
    return parseInt(employee.id) === parseInt(this.selectedId);
  }

}
