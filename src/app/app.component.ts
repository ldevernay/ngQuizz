import { Component } from '@angular/core';

import { Quizz } from './Quizz';

@Component({
  selector: 'quizz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quizz';
  quizz: Quizz;
  quizzes: Quizz[];
}
