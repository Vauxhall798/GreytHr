import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FeedComponent } from "./feed/feed.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations:[FeedComponent,HomeComponent],
  imports:[BrowserModule,FormsModule,ReactiveFormsModule,],
  providers:[]


})
export class SideModule{

}
