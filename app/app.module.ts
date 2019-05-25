import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';

import{UserService} from './user/user.service';
import {EmployeeService} from './employee/employeeservice/employee.service';


import { EmployeeloginComponent } from './employee/employeelogin/employeelogin.component';
import { EmployeeregistrationComponent } from './employee/employeeregistration/employeeregistration.component';
import { EmployeeviewComponent } from './employee/employeeview/employeeview.component';
import { OwnerloginComponent } from './owner/ownerlogin/ownerlogin.component';
import { HomeComponent } from './home/home.component';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { EmployeeprofileComponent } from './employee/employeeview/employeeprofile/employeeprofile.component';
import { OwnerService } from './owner/owner.service';
import { OwnerviewComponent } from './owner/ownerview/ownerview.component';
import { VendorviewComponent } from './vendor/vendorview/vendorview.component';
import { VendorService } from './vendor/vendor.service';
import { EmployeemenuComponent } from './employee/employeemenu/employeemenu.component';
import { FoodmenuComponent } from './employee/employeemenu/foodmenu/foodmenu.component';
import { EmployeemoviesComponent } from './employee/employeemovies/employeemovies.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketService } from './ticket/ticket-service';
import { OwnerseatComponent } from './owner/ownerseat/ownerseat.component';
import { OwnerbookingsComponent } from './owner/ownerbookings/ownerbookings.component';
import { VendorbookingsComponent } from './vendor/vendorbookings/vendorbookings.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    EmployeeloginComponent,
    EmployeeregistrationComponent,
    EmployeeviewComponent,
    OwnerloginComponent,
    HomeComponent,
    VendorloginComponent,
    EmployeeprofileComponent,
    OwnerviewComponent,
    VendorviewComponent,
    EmployeemenuComponent,
    FoodmenuComponent,
    EmployeemoviesComponent,
    TicketComponent,
    OwnerseatComponent,
    OwnerbookingsComponent,
    VendorbookingsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    EmployeeService,
    OwnerService,
    VendorService,
    TicketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
