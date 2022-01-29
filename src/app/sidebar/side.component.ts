import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Component({
  selector:'sidebar',
  templateUrl:'./side.component.html',
  styles:[]
})

export class SideComponent{

  constructor(private router:Router,private auth:AuthService){}

  logout(){
   this.auth.logout();
  }


}
