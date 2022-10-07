import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toDos: string[] = ['make stuff', 'get smarter', 'job time', 'profit!'];

  constructor() {}
}
