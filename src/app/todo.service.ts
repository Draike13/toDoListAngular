import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state: { [number: number]: string } = {};

  toDos: Todo[] = [
    { text: 'Make Stuff', completed: false, deleted: false },
    { text: 'Get Smarter', completed: false, deleted: false },
    { text: 'Job Time', completed: false, deleted: false },
    { text: 'Profit!', completed: false, deleted: false },
  ];

  constructor() {
    this.toDos.forEach((todo, index) => {
      this.state[index] = 'normal';
    });
  }

  addTodo(newTodo: string) {
    this.toDos.push({ text: newTodo, completed: false, deleted: false });
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, {
      text: editedFormData,
      completed: false,
      deleted: false,
    });
  }

  deleteList() {
    this.toDos.splice(0, this.toDos.length);
  }

  deleteCard(index: number) {
    this.toDos.splice(index, 1);
  }
}
