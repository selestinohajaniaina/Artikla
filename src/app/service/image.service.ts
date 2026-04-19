import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private URL: string = environment.SERVERURL;

  constructor(private http: HttpClient) { }

  uploadImage(imageBase64: string) {
    return this.http.post(`${this.URL}/article/upload`, { imageBase64 });
  }
  
}
