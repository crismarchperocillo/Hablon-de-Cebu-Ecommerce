import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ORDER, Order } from '../order';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  order: Order | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

}
