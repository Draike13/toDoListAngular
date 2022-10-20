import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state: string = 'normal';
  toDos: string[] = ['Make Stuff', 'Get Smarter', 'Job Time', 'Profit!'];

  constructor() {}

  addTodo(newTodo: string) {
    this.toDos.push(newTodo);
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, editedFormData);
  }

  deleteList() {
    this.toDos.splice(0, this.toDos.length);
  }

  deleteCard(index: number) {
    this.toDos.splice(index, 1);
  }
}
