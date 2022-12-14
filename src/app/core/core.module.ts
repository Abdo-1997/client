import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import {ToastrModule} from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { Breadcrumb } from '@exalif/ngx-breadcrumbs';
import { BreadcrumbModule } from 'xng-breadcrumb';
@NgModule({
  declarations: [NavBarComponent, TestErrorComponent, NotFoundComponent, ServerErrorComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass:'tost-bottom-right',
      preventDuplicates:true
    })
    ,BreadcrumbModule
  ],
  exports:[
    NavBarComponent,HeaderComponent,BreadcrumbModule]
})
export class CoreModule { }
