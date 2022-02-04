import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { HomeComponent } from "./home/home.component";
import { SideComponent } from "./side.component";
import { SalaryComponent } from './salary/salary.component';
import { ReviewComponent } from './review/review.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { MyLeaveComponent } from "./my-leave/my-leave.component";
import { MyLeaveModule } from "../sidebar/my-leave/my-leave.module";
import { AttendanceComponent } from "./attendance/attendance.component";
import { CommonModule } from "@angular/common";



export const sideRoute:Routes=[
  {path:'nav',component:SideComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'feed',component:FeedComponent},
    {path:'salary',component:SalaryComponent},
    {path:'review',component:ReviewComponent},
    {path:'calendar',component:HolidayCalendarComponent},
    {path:'attendance',component:AttendanceComponent},
    {path:'my-leave',loadChildren:()=>import("../sidebar/my-leave/my-leave.module").then(m=>m.MyLeaveModule)},
    {path:'',redirectTo:'/nav/home',pathMatch:"full"}
  ]}
]

@NgModule({
  declarations:[HomeComponent,FeedComponent, SalaryComponent, ReviewComponent, HolidayCalendarComponent,AttendanceComponent],
  imports:[CommonModule,RouterModule.forChild(sideRoute),FormsModule,MyLeaveModule],
  providers:[],
  exports:[RouterModule]


})
export class SideModule{

}
