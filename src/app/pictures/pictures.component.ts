import { Component, NgModule } from '@angular/core';
import { PicturesService } from '../pictures.service';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [NgModule],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  pictures: any[] = [];

  constructor(private picturesService: PicturesService) { 

  }

  ngOnInit() {
    this.picturesService.getRandomPictures().subscribe((data: any[]) => {
      this.pictures = data;
    });
  }

}
