import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly URL = 'http://localhost:3000/api/v1/playlists';

  constructor(
    private http: HttpClient,
  ) { }

  getPlaylists(): Observable<any> {
    return this.http.get(this.URL);
  }
}
