import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  apply(){
       this.router.navigate(['/nav/my-leave/leave'])
  }
  pending(){
    this.router.navigate(['/nav/my-leave/pending'])
  }
  history(){
    this.router.navigate(['/nav/my-leave/history'])

  }

}
