import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SavedList, Todo } from './todo.model';
import { DialogTaskAddComponent } from './Dialog Boxes/dialog-task-add/dialog-task-add.component';
import { MatDialog } from '@angular/material/dialog';
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
  savedListsArray: SavedList[] = [
    {
      list: [this.toDos[0], this.toDos[1], this.toDos[2], this.toDos[3]],
      listName: 'Default List',
    },
  ];
  todoSubject: Subject<Todo[]> = new Subject<Todo[]>();

  constructor(public dialog: MatDialog) {
    this.toDos.forEach((todo, index) => {
      this.state[index] = 'normal';
    });
    this.todoSubject.next(this.toDos);
  }

  editCardText(editedFormData: any, indexOfCardToEdit: number) {
    this.toDos.splice(indexOfCardToEdit, 1, {
      text: editedFormData,
    });
    this.todoSubject.next(this.toDos);
  }

  deleteList() {
    this.toDos.splice(0, this.toDos.length);
    this.todoSubject.next(this.toDos);
  }

  deleteCard(index: number) {
    let deletedCard = this.toDos.splice(index, 1);
    this.deletedToDos.splice(this.deletedToDos.length + 1, 0, ...deletedCard);
    this.todoSubject.next(this.toDos);
  }

  deleteCard2(index: number) {
    let deletedCard = this.toDos.splice(index, 1);
    this.deletedToDos.push(...deletedCard);
    this.todoSubject.next(this.toDos);
  }

  completeCard(index: number) {
    let completedCard = this.toDos.splice(index, 1);
    this.completedToDos.splice(
      this.completedToDos.length + 1,
      0,
      ...this.completedToDos
    );
    this.todoSubject.next(this.toDos);
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
    this.todoSubject.next(this.toDos);
  }

  createSavedList(listName: string) {
    let list: Todo[] = this.toDos.splice(0, this.toDos.length);
    let savedList: SavedList = { listName: listName, list: list };
    this.savedListsArray.push(savedList);
    this.todoSubject.next(this.toDos);
  }

  createSavedList2(listName: string) {
    let savedList: SavedList = { listName: listName, list: this.toDos.slice() };
    this.savedListsArray.push(savedList);
    this.toDos = [];
    this.todoSubject.next(this.toDos);
  }

  replaceTodoList(newList: Todo[]) {
    this.toDos = newList;
    this.todoSubject.next(this.toDos);
  }

  addTaskDialog() {
    this.dialog.open(DialogTaskAddComponent);
  }
}
