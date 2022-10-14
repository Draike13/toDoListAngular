import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toDos: string[] = ['make stuff', 'get smarter', 'job time', 'profit!'];

  constructor() {}

  addTodo(newTodo: string) {
    this.toDos.push(newTodo);
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, editedFormData);
  }
}
