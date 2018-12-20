import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { BookTableService } from '../../../@core/data/book-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './book-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class BookTableComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: 'Title',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      year: {
        title: 'Year',
        type: 'number',
      },
      author: {
        title: 'Author',
        type: 'string',
      },
      genre: {
        title: 'Genre',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BookTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
