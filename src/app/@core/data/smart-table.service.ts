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
    username: 'Yemi Tula',
    email: 'yemi@outlook.com',
  }, {
    username: 'Udo Geri',
    email: 'udodi@gmail.com',
  }, {
    username: 'Charity Chinwe',
    email: 'chasis@dex.zang',
  }, {
    username: 'Mark Zuka',
    email: 'mark@gmail.com',
  }, {
    username: 'Justice Praise',
    email: 'jacob@ando.net',
  }, {
    username: 'Glory Beyond',
    email: 'glory@outlook.com',
  }, {
    username: 'Obim Nkem',
    email: 'nkem@gmail.com',
  }, {
    username: 'Ariyo Led',
    email: 'krikor@ariyo.led',
  }];

  getData() {
    return this.data;
  }
}
