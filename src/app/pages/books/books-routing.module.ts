import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BookTableComponent } from './book-table/book-table.component';

const routes: Routes = [{
  path: '',
  component: BooksComponent,
  children: [{
    path: 'book-table',
    component: BookTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  BooksComponent,
  BookTableComponent,
];
