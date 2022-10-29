import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-dialog-task-add',
  templateUrl: './dialog-task-add.component.html',
  styleUrls: ['./dialog-task-add.component.css'],
})
export class DialogTaskAddComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}
}
