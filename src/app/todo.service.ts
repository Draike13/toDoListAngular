import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state: {[number: number] : string} = {}
  toDos: string[] = ['Make Stuff', 'Get Smarter', 'Job Time', 'Profit!'];

  constructor() {
    this.toDos.forEach((todo, index) => {
      this.state[index] = 'normal'
    })
  }

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
