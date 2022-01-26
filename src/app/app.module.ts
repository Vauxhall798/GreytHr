import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  SideComponent } from './sidebar/side.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { appRoutes } from './route';
import { NameeditorComponent } from './forms/nameeditor/nameeditor.component';


import { SideModule } from './sidebar/side.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    NameeditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    SideModule,
    RouterModule.forRoot(appRoutes)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
