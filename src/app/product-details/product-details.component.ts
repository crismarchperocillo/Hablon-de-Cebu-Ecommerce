import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
 
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('productName'));


  this.product = products.find(product => product.name === productIdFromRoute);
}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Product added to cart!");
  }
  
}
