import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /* An empty array that is responsible
       to add a division */
       public items = Array();

       /* A two-way binding performed which
          pushes text on division */
       public newTask!: any;


       /* When input is empty, it will
          not create a new division */
       public addToList() {
           if (this.newTask == '') {
           }
           else {
               this.items.push(this.newTask);
               this.newTask = '';
           }
       }

       /* This function takes to input the
          task, that has to be deleted*/
       public deleteTask(index:any) {
          confirm("Did you Finish the Task")
           this.items.splice(index, 1);
       }
   }


