import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo.model';
import { TodoService } from 'src/app/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTaskDeleteComponent } from 'src/app/dialog-task-delete/dialog-task-delete.component';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() toDo: Todo = { text: '' };
  @Input() i: number = 0;
  isEditing: boolean = false;
  constructor(public todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.toDo, this.i);
  }

  deleteTaskDialog(index: number) {
    this.dialog.open(DialogTaskDeleteComponent, { data: index });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  editTask(formData: any, index: number) {
    const editedTask = formData.form.value.task;
    this.todoService.editCardText(editedTask, index);
    formData.form.reset();
    this.toggleEdit();
    //this.todoService.state[index] = 'normal';
  }

  moveUp(currentIndex: number) {
    const removed = this.todoService.toDos.splice(currentIndex, 1);
    this.todoService.toDos.splice(currentIndex - 1, 0, removed[0]);
  }

  moveDown(currentIndex: number) {
    const removed = this.todoService.toDos.splice(currentIndex, 1);
    this.todoService.toDos.splice(currentIndex + 1, 0, removed[0]);
  }
}
