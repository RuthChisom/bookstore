import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    username: 'Ruth Chisom',
    email: 'ruth@tulabyte.net',
  }, {
    username: 'Layo Daniel',
    email: 'layo@tulabyte.net',
  }, {
    username: 'Tolani Ligali',
    email: 'tolani@tulabyte.net',
  }, {
    username: 'Myles Monroe',
    email: 'monroe@gmail.com',
  }, {
    username: 'Philip K. Dick',
    email: 'philip@yandex.ru',
  }, {
    username: 'Khaled Hosseni',
    email: 'khaled@gmail.com',
  }, {
    username: 'Mindy Kaling',
    email: 'barbara@yandex.ru',
  }, {
    username: '@sevan',
    email: 'sevan@outlook.com',
  }, {
    username: '@ruben',
    email: 'ruben@gmail.com',
  }, {
    username: '@karen',
    email: 'karen@yandex.ru',
  }, {
    username: '@mark',
    email: 'mark@gmail.com',
  }, {
    username: '@jacob',
    email: 'jacob@yandex.ru',
  }, {
    username: '@haik',
    email: 'haik@outlook.com',
  }, {
    username: '@garegin',
    email: 'garegin@gmail.com',
  }, {
    username: '@krikor',
    email: 'krikor@yandex.ru',
  }];

  getData() {
    return this.data;
  }
}
