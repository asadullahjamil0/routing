import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {


  }

  tshirts() {
    this.router.navigate(['tshirts'], { relativeTo: this.route })
  }

  trousers() {
    this.router.navigate(['trousers'], { relativeTo: this.route })
  }
}
