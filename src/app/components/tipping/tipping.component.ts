import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  billAmount = 0;
  tipPercentage = 0.20;
  tipAmount = 0;
  subTotal = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calculateTip(amount: number) {
    this.billAmount = isNaN(amount) ? 0 : amount;
    this.update();
  }

  changeTipAmount(amount: number): void {
    this.tipPercentage = amount;
    this.update();
  }

  update() {
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.total = this.tipAmount + this.billAmount;
  }

}
