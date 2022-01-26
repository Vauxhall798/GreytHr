import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.css']
})
export class NameeditorComponent implements OnInit  {
  public loginForm!:FormGroup

  constructor(private formBuilder:FormBuilder,private router:Router) { }

  email:any
  password:any
  Mouse:boolean=false;
  ngOnInit(): void {

  }
  login(formValues: any){
    this.router.navigate(['nav']);

  }



}
