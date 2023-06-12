import { Car } from 'src/app/core/models/Car';
import { CarService } from './../../core/car.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
})
export class CustomFormComponent implements OnInit {
  public cars?: Car[];
  carName: string = '';
  carModel: string = '';
  carYear: number = 0;

  constructor(private carService: CarService) {}
  ngOnInit() {
    //this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
        console.log(this.cars);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addCar(name: string, model: string, year: number) {

    const carToAdd = new Car(0,name, model, year);
    console.log(carToAdd);
 this.carService.addCar(carToAdd).subscribe(
   (response: Car) => {
     console.log(response);
    // this.getCars();
   },
   (error: HttpErrorResponse) => {
    console.log(error);
    alert(error.message);
   }
 );
}


}
