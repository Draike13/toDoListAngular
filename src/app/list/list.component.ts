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
  check: number = -1;
  value: string = '';

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.toDos = this.todoService.toDos;
  }

  // this.todoService.state[index] === 'normal'
  //   ? (this.todoService.state[index] = 'highlighted')
  //   : (this.todoService.state[index] = 'normal');
}
