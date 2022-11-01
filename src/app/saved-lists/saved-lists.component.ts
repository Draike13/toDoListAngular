import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { SavedList, Todo } from '../todo.model';

@Component({
  selector: 'app-saved-lists',
  templateUrl: './saved-lists.component.html',
  styleUrls: ['./saved-lists.component.css'],
})
export class SavedListsComponent implements OnInit {
  @Input() list: SavedList = { list: [], listName: '' };
  @Input() i: number = 0;
  showFiller = false;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}

  reloadList(index: number) {
    const grabbedList: Todo[] =
      this.todoService.savedListsArray[index].list.slice(0);
    this.todoService.replaceTodoList(grabbedList);
  }

  switchFiller() {
    this.showFiller = !this.showFiller;
  }
}
