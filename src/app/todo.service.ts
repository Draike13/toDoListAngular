import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  state: { [number: number]: string } = {};
  toDos: { text: string }[] = [
    { text: 'Make Stuff' },
    { text: 'Get Smarter' },
    { text: 'Job Time' },
    { text: 'Profit!' },
  ];

  constructor() {
    this.toDos.forEach((todo, index) => {
      this.state[index] = 'normal';
    });
  }

  addTodo(newTodo: string) {
    this.toDos.push({ text: newTodo });
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, { text: editedFormData });
  }

  deleteList() {
    this.toDos.splice(0, this.toDos.length);
  }

  deleteCard(index: number) {
    this.toDos.splice(index, 1);
  }
}
