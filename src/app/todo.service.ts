import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toDos: string[] = ['Make Stuff', 'Get Smarter', 'Job Time', 'Profit!'];

  constructor() {}

  addTodo(newTodo: string) {
    this.toDos.push(newTodo);
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, editedFormData);
  }
}
