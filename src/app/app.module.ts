import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogListDeleteComponent } from './Dialog Boxes/dialog-list-delete/dialog-list-delete.component';
import { DialogTaskDeleteComponent } from './Dialog Boxes/dialog-task-delete/dialog-task-delete.component';
import { DialogSaveListComponent } from './Dialog Boxes/dialog-save-list/dialog-save-list.component';
import { TodoCardComponent } from './list/todo-card/todo-card.component';
import { DialogTaskCompleteComponent } from './Dialog Boxes/dialog-task-complete/dialog-task-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    DialogListDeleteComponent,
    DialogTaskDeleteComponent,
    DialogSaveListComponent,
    TodoCardComponent,
    DialogTaskCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
