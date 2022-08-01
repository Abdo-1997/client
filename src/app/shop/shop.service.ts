import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/types';
import { map, Observable } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
 private baseUrl='https://localhost:44385/api/'

  constructor(private http:HttpClient) {

   }
   getProducts(shopParams:ShopParams){
    let params = new HttpParams();
    if(shopParams.brandId !==0){
       params = params.append('brandId',shopParams.brandId.toString())
    }
    if(shopParams.typeId !==0){
      params = params.append('typeId',shopParams.typeId.toString())
    }
    if(shopParams.Search ){
      params = params.append('Search',shopParams.Search)
    }
    params=  params.append('Sort',shopParams.sort.toString())

    params=  params.append('PageIndx',shopParams.pageNumber.toString())

    params=  params.append('PageSize',shopParams.pageSize.toString())
   
    
    return this.http.get<IPagination>(this.baseUrl+'Product/Products',{observe:'response',params})
    .pipe(
      map(response=>{return response.body})
    )
   }
   getProductById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(this.baseUrl+'product/'+id)
   }
   getTypes(){
    return this.http.get<IBrand[]>(this.baseUrl+'Product/tybes')
   }
   getBrands(){
    return this.http.get<IType[]>(this.baseUrl+'Product/brands')
   }
}
