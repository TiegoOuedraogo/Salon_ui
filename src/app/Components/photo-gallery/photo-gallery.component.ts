import {Component, OnInit} from '@angular/core';
import { PhotoService } from '../../service/photo.service';
import { Photo } from '../../model/photo';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss'
})

export class PhotoGalleryComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  // Fetch photos from the backend
  loadPhotos(): void {
    this.photoService.getPhotos().subscribe(
      (data) => {
        this.photos = data;
      },
      (error) => {
        console.error('Error loading photos:', error);
      }
    );
  }
}
