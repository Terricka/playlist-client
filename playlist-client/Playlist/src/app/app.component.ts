import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Playlist';
  playlists: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  getPlaylists(){
    this.api.getPlaylists().subscribe(res => {
      console.log(res);
      this.playlists = res;
    })
  }
}
