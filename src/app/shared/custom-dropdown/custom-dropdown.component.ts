import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarService } from 'src/app/core/car.service';
import { Car } from 'src/app/core/models/Car';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {
  @Input() cars:Car[] = [];
    selectedOption: string="";

  constructor(private carService:CarService){}
  ngOnInit() {
    this.cars = this.getCars();
  }

  
  @Output() selectionChanged = new EventEmitter<string>();

  onSelectionChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectionChanged.emit(selectedValue);
  }



  public getCars(): any {
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
        console.log("from drop");
        console.log(this.cars);
        return this.cars;
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
