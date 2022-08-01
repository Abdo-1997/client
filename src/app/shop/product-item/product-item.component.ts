import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
@Input() productInput!:IProduct;
product!:IProduct;
  ngOnInit(): void {
 this.product=this.productInput;
  }


}
