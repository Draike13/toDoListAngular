import { DialogTaskDeleteComponent } from '../dialog-task-delete/dialog-task-delete.component';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatDialog } from '@angular/material/dialog';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('buttonState', [
      state(
        'normal',
        style({
          backgroundColor: '',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: '#360601',
        })
      ),
      transition('normal <=> highlighted', animate(450)),
    ]),
  ],
})
export class ListComponent implements OnInit {
  toDos: { text: string }[] = [];
  check: number = -1;
  value: string = '';

  constructor(public todoService: TodoService, public Dialog: MatDialog) {}

  ngOnInit(): void {
    this.toDos = this.todoService.toDos;
  }

  editTask(formData: any, index: number) {
    const editedTask = formData.form.value.task;
    this.todoService.editCardText(editedTask, index);
    formData.form.reset();
    this.check = -1;
    this.todoService.state[index] = 'normal';
  }

  moveUp(currentIndex: number) {
    const removed = this.todoService.toDos.splice(currentIndex, 1);
    const objectToReturn: any = removed.at(0);
    this.todoService.toDos.splice(currentIndex - 1, 0, objectToReturn);
  }

  moveDown(currentIndex: number) {
    const removed = this.todoService.toDos.splice(currentIndex, 1);
    const objectToReturn: any = removed.at(0);
    this.todoService.toDos.splice(currentIndex + 1, 0, objectToReturn);
  }

  switchCase(index: number) {
    this.todoService.state[index] === 'normal'
      ? (this.todoService.state[index] = 'highlighted')
      : (this.todoService.state[index] = 'normal');

    if (this.check != index) {
      this.check = index;
    } else this.check = -1;
  }

  editText(index: number) {
    if (this.check === index) {
      return 'Cancel';
    } else this.todoService.state[index] = 'normal';
    return 'Edit';
  }

  deleteTaskDialog(index: number) {
    this.Dialog.open(DialogTaskDeleteComponent, { data: index });
  }
}
