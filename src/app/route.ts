import { Routes } from "@angular/router";

import { NameeditorComponent } from "./forms/nameeditor/nameeditor.component";

import { SideComponent } from "./sidebar/side.component";


export const appRoutes:Routes=[
{path:'login',component:NameeditorComponent},
{path:'nav',component:SideComponent},
{path:'',redirectTo:'/nav',pathMatch:'full'}
]
