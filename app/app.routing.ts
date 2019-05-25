import { NgModule } from '@angular/core';
import { Routes,RouterModule, PreloadAllModules } from '@angular/router';
import {UserComponent} from './user/user.component';
import { EmployeeloginComponent } from './employee/employeelogin/employeelogin.component';
import { VendorloginComponent } from './vendor/vendorlogin/vendorlogin.component';
import { OwnerloginComponent } from './owner/ownerlogin/ownerlogin.component';
import { AppComponent } from './app.component';
import { EmployeeviewComponent  } from './employee/employeeview/employeeview.component';
import { HomeComponent  } from './home/home.component';
import { EmployeeregistrationComponent} from './employee/employeeregistration/employeeregistration.component';
import { EmployeeprofileComponent } from './employee/employeeview/employeeprofile/employeeprofile.component';
import { OwnerviewComponent } from './owner/ownerview/ownerview.component';
import { VendorviewComponent } from './vendor/vendorview/vendorview.component';
import { EmployeemenuComponent } from './employee/employeemenu/employeemenu.component';
import { EmployeemoviesComponent } from './employee/employeemovies/employeemovies.component';
import { TicketComponent } from './ticket/ticket.component';
import { OwnerseatComponent } from './owner/ownerseat/ownerseat.component';
import { OwnerbookingsComponent } from './owner/ownerbookings/ownerbookings.component';
import { VendorbookingsComponent } from './vendor/vendorbookings/vendorbookings.component';
@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'user', component: UserComponent },
         { path: 'employeelogin', component: EmployeeloginComponent,data:{animation:'HomePage'} },
         { path: 'employeeregistration', component: EmployeeregistrationComponent },
         { path: 'employeeview/:empId', component: EmployeeviewComponent },
         { path: 'vendorlogin', component: VendorloginComponent },
         { path: 'ownerlogin', component: OwnerloginComponent },
        {path:'employeeprofile/:empId',component:EmployeeprofileComponent},
        {path:'ownerview/:id',component:OwnerviewComponent},
        {path:'vendorview/:fid',component:VendorviewComponent},
        {path:'employeemenuComponent/:empId',component:EmployeemenuComponent},
        {path:'employeemoviesComponent/:empId',component:TicketComponent},
        {path:'ownerseat' ,component:OwnerseatComponent},
        {path:'ownerbookings', component:OwnerbookingsComponent},
        {path:'vendorbookings',component:VendorbookingsComponent}

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
