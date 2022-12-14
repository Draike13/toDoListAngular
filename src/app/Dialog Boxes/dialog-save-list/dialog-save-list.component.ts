import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-dialog-save-list',
  templateUrl: './dialog-save-list.component.html',
  styleUrls: ['./dialog-save-list.component.css'],
})
export class DialogSaveListComponent implements OnInit {
  value = 'New List';

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
