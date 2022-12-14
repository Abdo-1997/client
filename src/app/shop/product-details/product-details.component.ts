import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product!:IProduct;


  constructor(private shopService:ShopService,private activateRout:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
    console.log(this.activateRout.snapshot.paramMap);
  }


loadProduct(){
  this.shopService.getProductById(Number(this.activateRout.snapshot.paramMap.get('id'))).subscribe({
      next: (data)=>this.product=data,
      error: (err)=>console.log(err)
    })}
}
