import { Component, OnInit, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PicturesService } from '../services/pictures.service';

@Component({
  selector: 'app-pictures',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css'],
  providers: [PicturesService]
})
export class PicturesComponent implements OnInit {
  pictures: any[] = [];

  constructor(@Inject(PicturesService) private picturesService: PicturesService) { }

  ngOnInit(): void {
    this.picturesService.getRandomPictures().subscribe((data: any[]) => {
      this.pictures = data;
    });
  }
}
