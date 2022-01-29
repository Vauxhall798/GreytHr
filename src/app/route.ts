import { Routes } from "@angular/router";

import { NameeditorComponent } from "./forms/nameeditor/nameeditor.component";
import { AuthGuard } from "./guards/auth.guard";



export const appRoutes:Routes=[
{path:'login',component:NameeditorComponent},
{path:'nav',canActivate:[AuthGuard],loadChildren:()=>import('../app/sidebar/side.module').then(m=>m.SideModule)},
{path:'',redirectTo:'/login',pathMatch:'full'},

]
