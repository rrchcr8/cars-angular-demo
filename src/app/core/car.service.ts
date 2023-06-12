import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from './models/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiServerUrl}/Car/all`);
  }

  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(
      `${this.apiServerUrl}/Car/add`,
      car
    );
  }
}
