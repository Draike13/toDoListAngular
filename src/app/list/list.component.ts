import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  toDos: string[] = [];

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.toDos = this.todoService.toDos;
  }
}
