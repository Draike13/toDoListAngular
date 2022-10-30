import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state: { [number: number]: string } = {};

  toDos: Todo[] = [
    { text: 'Make Stuff' },
    { text: 'Get Smarter' },
    { text: 'Job Time' },
    { text: 'Profit!' },
  ];
  deletedToDos: Todo[] = [];
  completedToDos: Todo[] = [];

  constructor() {
    this.toDos.forEach((todo, index) => {
      this.state[index] = 'normal';
    });
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, {
      text: editedFormData,
    });
  }

  deleteList() {
    this.toDos.splice(0, this.toDos.length);
  }

  deleteCard(index: number) {
    let deletedCard = this.toDos.splice(index, 1);
    this.deletedToDos.splice(this.deletedToDos.length + 1, 0, deletedCard[0]);
    console.log(this.deletedToDos);
  }
  completeCard(index: number) {
    let completedCard = this.toDos.splice(index, 1);
    this.completedToDos.splice(
      this.completedToDos.length + 1,
      0,
      this.completedToDos[0]
    );
  }

  addNewTask(submitData: any) {
    const newTask = submitData.form.value.task;
    if (
      newTask != '' &&
      newTask != ' ' &&
      newTask != '  ' &&
      newTask != '   '
    ) {
      this.toDos.push({ text: newTask });
      submitData.form.reset();
    } else submitData.form.reset();
  }
}
