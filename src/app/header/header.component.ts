import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogListDeleteComponent } from '../Dialog Boxes/dialog-list-delete/dialog-list-delete.component';
import { DialogSaveListComponent } from '../Dialog Boxes/dialog-save-list/dialog-save-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public todoService: TodoService, public dialog: MatDialog) {}
  currentList: any = this.todoService.toDos;

  ngOnInit(): void {}

  deleteListDialog() {
    this.dialog.open(DialogListDeleteComponent);
  }

  saveListDialog(listToSave: string[]) {
    this.dialog.open(DialogSaveListComponent);
  }

  showCompleted() {}

  showDeleted() {}
}
