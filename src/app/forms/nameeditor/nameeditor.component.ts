import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.css']
})
export class NameeditorComponent implements OnInit  {
  public loginForm!:FormGroup

  constructor(private auth:AuthService,private router:Router) { }

  email:any
  password:any
  Mouse:boolean=false;
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['nav/home']);
    }

  }



  login(formValues: any){
      this.auth.login(formValues).subscribe(
        (result: any)=>{
          this.router.navigate(['nav/home']);
        },
        (err:Error)=>{
          alert(err.message)
        }
      )

    console.log(formValues)


  }



}
