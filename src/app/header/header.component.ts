import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogListDeleteComponent } from '../dialog-list-delete/dialog-list-delete.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addNewTask(submitData: any) {
    const newTask = submitData.form.value.task;
    console.log(newTask);
    this.todoService.addTodo(newTask);
    submitData.form.reset();
  }

  deleteListDialog() {
    this.dialog.open(DialogListDeleteComponent);
  }
}
