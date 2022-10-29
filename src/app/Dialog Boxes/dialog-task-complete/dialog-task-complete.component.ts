import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../../todo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-task-complete',
  templateUrl: './dialog-task-complete.component.html',
  styleUrls: ['./dialog-task-complete.component.css'],
})
export class DialogTaskCompleteComponent implements OnInit {
  constructor(
    public todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  ngOnInit(): void {}
}
