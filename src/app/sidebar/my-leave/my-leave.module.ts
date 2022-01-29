import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLeaveComponent } from './my-leave.component';
import { LeaveComponent } from './leave/leave.component';
import { PendingComponent } from './pending/pending.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleComponent } from 'src/app/common/collapsible.component';
import { UpdateComponent } from './update/update.component';


export const leaveRoutes:Routes=[
  {path:'',component:MyLeaveComponent,children:[
    {path:'leave',component:LeaveComponent},
    {path:'pending',component:PendingComponent},
    {path:'history',component:HistoryComponent},
    {path:'update/:id',component:UpdateComponent},
    {path:'',redirectTo:'/nav/my-leave/leave',pathMatch:'full'}
  ]}
]



@NgModule({
  declarations: [MyLeaveComponent, LeaveComponent, PendingComponent, HistoryComponent,CollapsibleComponent,UpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(leaveRoutes),
    FormsModule,
    ReactiveFormsModule

  ]
})
export class MyLeaveModule { }
