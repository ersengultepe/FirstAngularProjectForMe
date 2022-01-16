import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path:"", redirectTo:"products", pathMatch:"full"},
  { path:"products", component: ProductComponent},
  { path:"chart", component:ChartComponent},
  { path:"products/category/:categoryId", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
