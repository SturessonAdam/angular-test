import { Component, Inject } from '@angular/core';
import { PicturesService } from '../services/pictures.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pictures.component.html',
  styleUrl: './pictures.component.css'
})
export class PicturesComponent {
  pictures: any[] = [];

  constructor(@Inject(PicturesService) private picturesService: PicturesService) { 

  }

  ngOnInit() {
    this.picturesService.getRandomPictures().subscribe((data: any[]) => {
      this.pictures = data;
    });
  }

}
