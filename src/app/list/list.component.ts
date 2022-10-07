import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  newTask: string = '';
  toDos: string[] = [];
  clickme() {
    //this.todoService.toDos.push(this.newTask);
    this.toDos = this.todoService.addNewTodo(this.newTask);
    this.newTask = '';
  }

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.toDos = this.todoService.toDos;
  }
}
