import { Injectable } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toDos: string[] = ['make stuff', 'get smarter', 'job time', 'profit!'];

  addNewTodo(newTodo : string) {
    this.toDos.push(newTodo);
    return this.toDos;
  }




  constructor() {}
}
