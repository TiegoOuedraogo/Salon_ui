import {Component, input, OnInit} from '@angular/core';
import { PhotoService } from '../../service/photo.service';
import {Event, NavigationError} from "@angular/router";
import * as console from "node:console";

@Component({
  selector: 'app-salon-service',
  standalone: true,
  imports: [],
  templateUrl: './salon-service.component.html',
  styleUrl: './salon-service.component.scss'
})
export class SalonServiceComponent implements OnInit{
  selectedFile: File | null = null;
  description: string = '';

  constructor(private photoService: PhotoService) {}

  onFileSelected(event: Event): void {
    if (event instanceof NavigationError) {
      const input = event.target as unknown as HTMLInputElement;
    }
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onUpload(event: Event): void {
    event.preventDefault();

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('description', this.description);

      this.photoService.uploadPhoto(formData).subscribe(
        (response) => {
          alert('Photo uploaded successfully!');
        },
        (error) => {
          console.error('Error uploading photo:', error);
        }
      );
    } else {
      alert('Please select a file to upload.');
    }
  }

  ngOnInit(): void {
  }
}
