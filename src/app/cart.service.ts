import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product [] = [];

 products = new Subject();

  //add to cart
  addToCart(product: Product ){
    console.log(this.items);
    this.items.push(product);
  }

addToOrder(items: any){
  console.log(items);
  this.items.push(items);
}

  //increase quantity
  incQuant(items: any){
    if(items.quantity){
      items.quantity++;
    }else{
      items.quantity=1;
    }
  }

  //decrease quantity
  decQuant(items: any){
    if(items.quantity > 1){
      items.quantity--;
    }else{
      items.quantity=1;
    }
  }

  //delete cart item (specific)
  deleteToCart(index: number){
    this.items.splice(index, 1);
  }

  
  getItems() {
    return this.items;
  }

  emptyCart() {
   this.items.length = 0;
   this.products.next(this.items);
   
    
  }
  constructor() { }
}
