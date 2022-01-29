import { Component, OnInit } from '@angular/core';
import { UserList } from '../../user';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  Userlist!:UserList[]
  i=0;

  constructor() {

  }

  ngOnInit(): void {
    const records=localStorage.getItem('userList')
    if(records !== null){
      this.Userlist=JSON.parse(records)
    }
  }
  delete(id:any){
    confirm("Are you Sure to WithDraw Leave?")
    const oldrecords=localStorage.getItem('userList')
    if(oldrecords !== null){
      const userValue=JSON.parse(oldrecords)
      userValue.splice(userValue.findIndex((a:any)=>{
        a.UserId == id
      }),1)

      localStorage.setItem('userList',JSON.stringify(userValue))

    }
    const records=localStorage.getItem('userList')
    if(records !== null){
      this.Userlist=JSON.parse(records)
    }
  }


}
