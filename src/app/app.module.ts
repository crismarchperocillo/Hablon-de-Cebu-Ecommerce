import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { HomepageUserComponent } from './homepage-user/homepage-user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { CategoryComponent } from './admin/category/category.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent,
    CartComponent,
    OrdersComponent,
    LoginComponent,
    HomepageUserComponent,
    DashboardComponent,
    ProductsComponent,
    SidebarComponent,
    CategoryComponent,
    AdminOrdersComponent,
    ViewOrderComponent,
    RegisterComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
