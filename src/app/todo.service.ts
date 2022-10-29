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

  addTodo(newTodo: string) {
    this.toDos.push({ text: newTodo });
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
}
