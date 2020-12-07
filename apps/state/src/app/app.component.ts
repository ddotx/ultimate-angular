import { Component } from '@angular/core';
import { Store } from './store';

@Component({
  selector: 'ultimate-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'State Management with RxJS';
  todos$ = this.store.select<any[]>('todos')

  constructor(
    private store: Store
  ) {
    console.log(this.store) // ==> Store {subject: BehaviorSubject, store: Observable} + value

    this.store.set('todos',
      [
        {id: 1, name: 'Eat dinner'},
        {id: 2, name: 'Do washing'}
        ])
  }
}
