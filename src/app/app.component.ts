import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toDoListAngular';
  showFiller = false;
  savedListsArray: any;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.savedListsArray = this.todoService.savedListsArray;
  }
  reloadList(drawer: any, index: number) {
    const grabbedList: Todo[] = this.savedListsArray[index].list.slice(0);
    this.todoService.replaceTodoList(grabbedList);
    drawer.toggle();
  }
}
