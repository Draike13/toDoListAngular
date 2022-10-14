import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-task-delete',
  templateUrl: './dialog-task-delete.component.html',
  styleUrls: ['./dialog-task-delete.component.css'],
})
export class DialogTaskDeleteComponent implements OnInit {
  constructor(
    public todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {}
}
