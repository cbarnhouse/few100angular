import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoItem[] = [
    { description: 'Get More Beer', complete: true },
    { description: 'Get lightbulbs', complete: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(what): void {
    this.items = [{ description: what.value, complete: false }, ...this.items]
    console.log(what);
    what.value = '';
    what.focus();
  }

  markComplete(item: TodoItem): void {
    item.complete = true;
  }

}
