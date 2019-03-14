import { Component, Input } from '@angular/core';
import { MovieBrowsingItems } from './movieBrowsingItemModel';
@Component({
  selector: 'movie-browsing-table',
  templateUrl: 'movie-browsing-table.html'
})
export class MovieBrowsingTableComponent {
  text: string;
  @Input() items=[];
  constructor() {
    console.log('Hello MovieBrowsingTableComponent Component');
    this.text = 'Hello World';
  }
}
