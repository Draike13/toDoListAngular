import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { SavedList, Todo } from '../todo.model';
import { DialogSavedListDeleteComponent } from '../Dialog Boxes/dialog-saved-list-delete/dialog-saved-list-delete.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-saved-lists',
  templateUrl: './saved-lists.component.html',
  styleUrls: ['./saved-lists.component.css'],
})
export class SavedListsComponent implements OnInit {
  @Input() list: SavedList = { list: [], listName: '' };
  @Input() i: number = 0;
  showFiller = false;

  constructor(public todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  reloadList(index: number) {
    const grabbedList: Todo[] =
      this.todoService.savedListsArray[index].list.slice(0);
    this.todoService.replaceTodoList(grabbedList);
  }

  switchFiller() {
    this.showFiller = !this.showFiller;
  }

  updateSavedList(i: number, listName: string) {
    let list: Todo[] = this.todoService.toDos.splice(
      0,
      this.todoService.toDos.length
    );
    let savedList: SavedList = { listName: listName, list: list };
    this.todoService.savedListsArray.splice(i, 1, savedList);
    this.todoService.todoSubject.next(this.todoService.toDos);
    this.reloadList(i);
    this.todoService.todoSubject.next(this.todoService.toDos);
  }

  deleteSavedListDialog(index: number) {
    this.dialog.open(DialogSavedListDeleteComponent);
  }
}
