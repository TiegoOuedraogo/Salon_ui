import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'http://localhost:8080/api/photos';

  constructor(private http: HttpClient) {}

  // Get all photos
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}`);
  }

  // Upload a new photo
  uploadPhoto(formData: FormData): Observable<Photo> {
    return this.http.post<Photo>(`${this.apiUrl}/upload`, formData);
  }
}
