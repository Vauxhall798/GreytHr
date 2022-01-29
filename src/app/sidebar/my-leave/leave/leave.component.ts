import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserList } from '../../user';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  userList:UserList
  Mouse:boolean=false



  constructor(private router:Router) {
    this.userList=new UserList();
   }

  ngOnInit(): void {


  }
  getNewUserId(){
    const oldrecords=localStorage.getItem('userList')
    if(oldrecords !== null){
      const userValue=JSON.parse(oldrecords)
      return userValue.length + 1
    }else{
      return 1;
    }
  }
  saveform(formValues:any){
    const latestId=this.getNewUserId();

    this.userList.UserId=latestId
    const oldrecords=localStorage.getItem('userList')
    if(oldrecords !== null){
      const userValue=JSON.parse(oldrecords)
      userValue.push(this.userList)
      localStorage.setItem('userList',JSON.stringify(userValue))

    }else{
      const userArr=[];
      userArr.push(this.userList)
      localStorage.setItem('userList',JSON.stringify(userArr))
    }


    this.router.navigate(['/nav/my-leave/pending'])
  }
  awakeMax(){
    const max=this.getNewUserId()
    return max-1
  }
}
