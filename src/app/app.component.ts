import { Component } from '@angular/core';
import { Car } from './core/models/Car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cars-angular-demo';
  dropdownOptions: Car[] = [];
  selectedOption: string="";

  onSelectionParent(value: string) {
    this.selectedOption = value;
  }
}
