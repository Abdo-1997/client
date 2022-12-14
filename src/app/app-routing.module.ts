import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent ,data:{breadcrumb:'test'}},
  {path:'shop',loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule)},
  {path:'server-error',component:ServerErrorComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'test-errors',component:TestErrorComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
