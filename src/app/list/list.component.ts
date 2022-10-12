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

  deleteCard(index: number) {
    this.todoService.toDos.splice(index, 1);
  }

  moveUp(currentIndex: number) {
    const removed = this.todoService.toDos.splice(currentIndex, 1);
    const removedString = removed.toString();
    this.todoService.toDos.splice(currentIndex - 1, 0, removedString);
  }
  moveDown(currentIndex: number) {
    const removed = this.todoService.toDos.splice(currentIndex, 1);
    const removedString = removed.toString();
    this.todoService.toDos.splice(currentIndex + 1, 0, removedString);
  }
}
