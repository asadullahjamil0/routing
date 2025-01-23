import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrl: './courses-details.component.css'
})

export class CoursesDetailsComponent {
constructor( private route: Router){
  

}
close(){
  this.route.navigate([{outlets : {course_details:null}}])
}

}
