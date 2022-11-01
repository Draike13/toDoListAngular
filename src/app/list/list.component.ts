import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  toDos: Todo[] = [];
  deletedToDos: Todo[] = [];
  completedToDos: Todo[] = [];
  check: number = -1;
  value: string = '';

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.todoSubject.subscribe((list) => {
      this.toDos = list;
    });
    this.toDos = this.todoService.toDos;
    this.deletedToDos = this.todoService.deletedToDos;
    this.completedToDos = this.todoService.completedToDos;
  }

  //   ? (this.todoService.state[index] = 'highlighted')
}
