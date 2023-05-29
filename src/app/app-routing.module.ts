import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';  
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent }from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
      { path: '', redirectTo: '/login', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'product', component: ProductListComponent },
      { path: 'products/:productName', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent}, 
      { path: 'orders', component: OrdersComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'manageProduct', component: ProductsComponent},
      { path: 'category', component: CategoryComponent},
      { path: 'admin-orders', component: AdminOrdersComponent},
      { path: 'view-order', component: ViewOrderComponent},
      { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
