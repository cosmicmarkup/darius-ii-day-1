import { Component } from '@angular/core';

// Declarator function. Declare that this function is a component.
@Component({
  selector: 'app-home', // embed component to another component
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor() {
   // serves as a script
  }

}
