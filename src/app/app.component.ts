import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasa';
  
  imgOfTheDay: any;

  constructor(public nasaService: NasaService) {this.display()};

  display() {
    this.nasaService.getImageOfTheDay().subscribe({
      next: (datasFromApi: any) => {
        this.imgOfTheDay = datasFromApi;
        console.log(datasFromApi);
      },
      error: (err: string) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'), 
    })
  };
}
