import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}

  addNewTask(submitData: any) {
    const newTask = submitData.form.value.task;
    console.log(newTask);
    this.todoService.addTodo(newTask);
    submitData.form.reset();
  }

  deleteTask() {
    this.todoService.toDos.splice(0, this.todoService.toDos.length);
  }
}
