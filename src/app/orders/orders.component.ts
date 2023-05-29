import { Component, OnInit } from '@angular/core';
import { ORDER, Order } from '../order';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dateObj: Date = new Date();
  //pay
  gName = "";
  gNumber = "";
  gProof = "";
  cancelReason = "";
  //cancel
  
  //orders = ORDER;
  orders: Order[] = ORDER;
  currentIndex!: number;
  
  isShown?: boolean = true;
  isClicked: boolean = false;
  enterHit: boolean = false;
  isHit: boolean = false;
  enterClicked: boolean = false;
  onClicked: boolean = false;
  onHit: boolean = false;
  pay!: FormGroup;
  cancelled!: FormGroup;


  viewForm: FormGroup = new FormGroup({

    itemName: new FormControl(''),
    date: new FormControl(''),
    pStatus: new FormControl(''),
    oStatus: new FormControl(''),
    total: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl('')
  });

viewOrder(orders: any, index: number): void {
  console.log(orders);
  this.viewForm.get('itemName')?.patchValue(orders.itemName),
  this.viewForm.get('date')?.patchValue(orders.date),
  this.viewForm.get('pStatus')?.patchValue(orders.pStatus),
  this.viewForm.get('oStatus')?.patchValue(orders.oStatus),
  this.viewForm.get('total')?.patchValue(orders.total),
  this.viewForm.get('price')?.patchValue(orders.price),
  this.viewForm.get('quantity')?.patchValue(orders.quantity)
}

  payOrder(pay: Order){
    this.isClicked = !this.isClicked
    this.onClicked = !this.onClicked

    this.pay = new FormGroup({
      id: new FormControl(pay.id),
      itemName: new FormControl(pay.itemName),
      price: new FormControl(pay.price),
      quantity: new FormControl(pay.quantity),
      name: new FormControl(pay.name),
      total: new FormControl(pay.total),
     oStatus: new FormControl(pay.oStatus),
     pStatus: new FormControl('Paid'),
     gName: new FormControl(''),
     gNumber: new FormControl(''),
     gProof: new FormControl('')
      
    });
  }
  
  onEnter(){
    this.enterHit = !this.enterHit
  }
  save(){
    console.log(this.pay);
    let index = this.orders.findIndex(pay => pay.id === this.pay.value.id);
    this.orders[index] = this.pay.value;

    this.isClicked = !this.isClicked
    this.isShown = !this.isShown;
  }


  cancelOrder(cancelled: Order){
    this.isHit = !this.isHit

    this.cancelled = new FormGroup({
      id: new FormControl(cancelled.id),
      itemName: new FormControl(cancelled.itemName),
      price: new FormControl(cancelled.price),
      quantity: new FormControl(cancelled.quantity),
      name: new FormControl(cancelled.name),
      total: new FormControl(cancelled.total),
     oStatus: new FormControl('Cancelled'),
     pStatus: new FormControl(cancelled.pStatus),
    });
  }
  cancel(){
   console.log(this.cancelled);
    let index = this.orders.findIndex(cancelled => cancelled.id === this.cancelled.value.id);
    window.alert("Do you want to cancel this order?");
    this.orders[index] = this.cancelled.value;
    this.isHit = !this.isHit
    this.isShown = !this.isShown;
    
  }
  Enter(){
    this.enterClicked = !this.enterClicked
  }
  closeCancel(){
    this.isHit = !this.isHit
    this.isShown = !this.isShown;
  }
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
}
toggleShow() {
  this.isShown = !this.isShown;
  this.onClicked = !this.onClicked
}
toggleShow1() {
  //view
  this.isShown = !this.isShown;
  this.onClicked = !this.onClicked
}
toggleShow2() {
  //view
  this.isShown = !this.isShown;

}
cancelPay(){
  this.isClicked = !this.isClicked
  this.isShown = !this.isShown;
}
ifEnter(){
  this.onClicked = !this.onClicked
}
}