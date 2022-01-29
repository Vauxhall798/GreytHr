import { Component, OnInit } from '@angular/core';
import { UserList } from '../../user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  userList!:UserList[]

  constructor() { }

  ngOnInit(): void {
    const records=localStorage.getItem('userList')
    if(records !== null){
      this.userList=JSON.parse(records)
    }
  }

}
