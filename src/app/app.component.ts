import { Component, OnInit } from '@angular/core';

import { Quizz } from './Model/Quizz';

import { DataService } from './data.service';

@Component({
  selector: 'quizz-root',
  templateUrl: './Templates/app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Quizz';
  items: Array<string>;
  constructor(private dataService: DataService){};
  getQuizz(): void {
    this.dataService.getSingle().then(items => this.items = items);
    console.log(this.items);
  }
  ngOnInit(): void {
    this.getQuizz();
  };
}
