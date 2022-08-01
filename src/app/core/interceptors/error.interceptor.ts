import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router,private toastr:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(e=>{
        if(e){
          if(e.status ===400){
            if(e.error.errors){
           throw e.error
            }else{
              this.toastr.error(e.error.message,e.error.statusCode)
            }
            }
           
          if(e.status ===401){
            this.toastr.error(e.error.message,e.error.statusCode)
        }
          if(e.status===404){
            this.router.navigateByUrl('/not-found')
          }
          if(e.status===500){
            const navigationExtras:NavigationExtras ={state:{error:e.error}}
            console.log(navigationExtras)
            this.router.navigateByUrl('/server-error',navigationExtras)
          }
         }
        return throwError(()=>e);
      })
    )
  }
}
