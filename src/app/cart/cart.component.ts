import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { ORDER, Order } from '../order';
import { products, Product } from '../product';
import { userData, USERDATA } from '../userData';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: Order[] = ORDER;
  users: userData[] = USERDATA;
  USER!: FormGroup;

  isClicked: boolean = false;
  enterHit: boolean = false;
  isShown?: boolean = true;

  items = this.cartService.getItems();
  
  
  quantity: number = 0;
  increaseQuantity(items: any) {
   this.cartService.incQuant(items);
  }

  decreaseQuantity(items: any) {
    this.cartService.decQuant(items);
  }
  
 
  getTotalPrice() {
    let total = 0;

    this.items.map(item => {
      total += item.price * item.quantity;
    });

    return total
  }


  checkout(){
  
    this.cartService.emptyCart();
    window.alert("Order checked out!");
  }


  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {}
  
  delete(index: number) {
   this.cartService.deleteToCart(index);

  }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  editDetails(USER: userData){
    this.isClicked = !this.isClicked

    this.USER = new FormGroup({
      id: new FormControl(USER.id),
      fname: new FormControl(USER.fname),
      lname: new FormControl(USER.lname),
      address: new FormControl(USER.address),
      zip: new FormControl(USER.zip),
      mobile: new FormControl(USER.mobile),
      email: new FormControl(USER.email)
    });
  }
  save() {
    let index = this.users.findIndex(USER => USER.id === this.USER.value.id);
    this.users[index] = this.USER.value;

    this.isClicked = !this.isClicked
    this.isShown = !this.isShown;
  }
  onEnter(){
    this.enterHit =!this.enterHit
  }
  cancel(){
    this.isClicked = !this.isClicked
    this.isShown = !this.isShown;
  }
}
