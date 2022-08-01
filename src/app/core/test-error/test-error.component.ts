import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
 baseUrl='https://localhost:44385/api'
 validationErrors:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getError404(){
    this.http.get(this.baseUrl+'/product/100').subscribe({
      next:p=>console.log(p),
      error:(e)=>console.log(e)  
     })}
  getError500(){
      this.http.get(this.baseUrl+'/BuggyApi/servererror').subscribe({
        next:p=>console.log(p),
        error:(e)=>console.log(e)  
       })}
  getError400(){
        this.http.get(this.baseUrl+'/BuggyApi/badrequest').subscribe({
          next:p=>console.log(p),
          error:(e)=>console.log(e)  
         })};
  getError400Validation(){
          this.http.get(this.baseUrl+'/product/forty').subscribe({
            next:p=>console.log(p),
            error:(e)=>{console.log(e);this.validationErrors= e.errors }
            
           })};
}
