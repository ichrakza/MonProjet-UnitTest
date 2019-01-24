import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MonProjet-UnitTest';

  additionner( a: number, b: number): number {
    if (a >= 0) {
      return a + b;
    } else {
    return a + b;
  }
}
}

