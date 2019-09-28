import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  data: any;

  constructor() { }

  ngOnInit() {
    this.data = this.createEmptyItem();
  }

  submit() {
    this.onAdd.emit(Object.assign({}, this.data));
    this.data = this.createEmptyItem();
  }

  addChildFor(todo) {
    todo.children.push(this.createEmptyItem())
  }

  createEmptyItem() {
    return {
      id: new Date().getTime(),
      name: '',
      done: false,
      children: []
    }
  }
}
