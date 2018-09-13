import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TitleInputComponent } from './title-input/title-input.component';
import { TopRowComponent } from './top-row/top-row.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TitleInputComponent,
    TopRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
