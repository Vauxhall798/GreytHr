import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserList } from '../../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userList:UserList
  Mouse:boolean=false
  max:number=3;

  constructor( private route:ActivatedRoute,private router:Router) {
    this.userList=new UserList();
    this.route.queryParams.subscribe((res)=>{
      this.userList.UserId=res['id']
    })
   }

  ngOnInit(): void {
    const oldrecords=localStorage.getItem('userList')
    if(oldrecords !== null){
      const userValue=JSON.parse(oldrecords)
      const currentUser=userValue.find((m:any)=>m.UserId==this.userList.UserId)
      if(currentUser !== undefined){
        this.userList.LeaveType=currentUser.LeaveType
        this.userList.StartDate=currentUser.StartDate
        this.userList.EndDate=currentUser.EndDate
        this.userList.SessionEnd=currentUser.SessionEnd
        this.userList.SessionStart=currentUser.SessionStart
      }

    }
  }

  Updateform(){

    const oldrecords=localStorage.getItem('userList')
    if(oldrecords !== null){
      const userValue=JSON.parse(oldrecords)
      userValue.splice(userValue.findIndex((a:any)=>{
        a.UserId == this.userList.UserId
      }),1)
      userValue.push(this.userList)

      localStorage.setItem('userList',JSON.stringify(userValue))

    }
    this.router.navigate(['/nav/my-leave/pending'])
  }

}



