import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/types';
import { ShopService } from './shop.service';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
@ViewChild("search") search!: ElementRef; 
  //#region  props
  products!: IProduct[];
  brands!:IBrand[];
  types!:IType[];
  shopParams = new ShopParams();
  totalCount!:number;
  sortOptions=[
    {name:'AlphaBitcal',value:'name'},
    {name:'price Low To High',value:'priceAsc'},
    {name:'price High To Low',value:'priceDesc'}
  ]
  //#endregion
  constructor(private shopService: ShopService) {}
  

  ngOnInit(): void {
 this.getProducts();
 this.geTypes();
 this.getBrands();
  }
  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (v: any) => (
        this.products = v.data,
        this.shopParams.pageNumber=v.pageIndex,
        this.shopParams.pageSize=v.pageSize,
        this.totalCount=v.count),
      error: (e: any) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
  geTypes(){
    this.shopService.getTypes().subscribe({
      next: (v: any) => (this.types = [{id:0,name:"All"},...v]),
      error: (e: any) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
  getBrands(){
    this.shopService.getBrands().subscribe({
      next: (v: any) => (this.brands =[{id:0,name:"All"},...v]),
      error: (e: any) => console.error(e),
      complete: () => console.info('complete'),
    });

  }

  onTypeIdSelected(typeId:number){
    
      this.shopParams.typeId = typeId;
      this.shopParams.pageNumber=1;
      this.getProducts();
    }
   
  
  
  onBrandIdSelected(brandId:number){
  
      this.shopParams.brandId = brandId;
      this.shopParams.pageNumber=1;
      this.getProducts();
    }
    onSortSelected(sort:string){
      console.log(sort)
      this.shopParams.sort =sort;
      this.shopParams.pageNumber=1;
      this.getProducts();
    }

    onPageChanged(event:any){
    if(this.shopParams.pageNumber !==event){
      this.shopParams.pageNumber = event;
      this.getProducts();}
    }
    onSearch(){
      this.shopParams.Search=this.search.nativeElement.value;
      this.shopParams.pageNumber=1;
      this.getProducts(); 
    }
    onReset(){
      this.search.nativeElement.value=""
    }
}