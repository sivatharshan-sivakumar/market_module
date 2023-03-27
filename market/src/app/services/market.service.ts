import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  private vegetableQuantity: number =0;

  constructor() { }

  addVegetable(quantity: number) {
    this.vegetableQuantity += quantity;
  }

  subtractVegetable(quantity: number) {
    this.vegetableQuantity -= quantity;
  }

  getVegetableQuantity(): number {
    return this.vegetableQuantity;
  }
}
