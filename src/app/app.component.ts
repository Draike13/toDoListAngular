import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toDoListAngular';
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
