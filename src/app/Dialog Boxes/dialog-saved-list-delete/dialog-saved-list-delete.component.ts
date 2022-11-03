import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-saved-list-delete',
  templateUrl: './dialog-saved-list-delete.component.html',
  styleUrls: ['./dialog-saved-list-delete.component.css'],
})
export class DialogSavedListDeleteComponent implements OnInit {
  constructor(
    public todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {}
}
