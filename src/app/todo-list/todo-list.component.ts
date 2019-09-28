import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(todoItem) {
    this.items = [...this.items, todoItem];
  }
  
  getItems() {
    return this.items;
  }

}
