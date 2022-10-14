import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dialog-list-delete',
  templateUrl: './dialog-list-delete.component.html',
  styleUrls: ['./dialog-list-delete.component.css'],
})
export class DialogListDeleteComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
