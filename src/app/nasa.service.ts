import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NasaService {

  constructor(public myApi: HttpClient) {}

  getImageOfTheDay() {
    return this.myApi.get("https://api.nasa.gov/planetary/apod?api_key=JJwHLZuj7n403t41qFpGkOaOIlybjNmxAFfiZq4p");
  }

}
