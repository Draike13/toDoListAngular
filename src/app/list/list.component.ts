import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  toDos: string[] = ['make stuff', 'get smarter', 'job time', 'profit!'];

  newTask: string = '';
  clickme() {
    this.toDos.push(this.newTask);
    this.newTask = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
