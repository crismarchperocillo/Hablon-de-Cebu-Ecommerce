import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ORDER, Order } from '../../order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  dateObj: Date = new Date();
  //name = '!!!';
  viewMode = 'tab1';
  isClicked: boolean = false;
  enterHit: boolean = false;

 orders: Order[] = ORDER;
 ord!: FormGroup;

 processOrder(ord: Order){
  this.isClicked = !this.isClicked

  this.ord = new FormGroup({
    id: new FormControl(ord.id),
    itemName: new FormControl(ord.itemName),
    price: new FormControl(ord.price),
    name: new FormControl(ord.name),
    total: new FormControl(ord.total),
    oStatus: new FormControl(ord.oStatus),
    pStatus: new FormControl(ord.pStatus),
    quantity: new FormControl(ord.quantity)

  });
 }

 onEnter(){
  this.enterHit =!this.enterHit
}

save(){
  let index = this.orders.findIndex(ord => ord.id === this.ord.value.id);
  this.orders[index] = this.ord.value;

  this.isClicked = !this.isClicked
}
cancel(){
  this.isClicked = !this.isClicked
}
  constructor() { }

  ngOnInit(): void {
  }

}
