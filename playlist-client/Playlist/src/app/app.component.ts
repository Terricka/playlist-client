import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Playlist } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Playlist';
  playlists: Playlist[] = [];
  singlePlaylist: Playlist | undefined;

  constructor(
    private api: ApiService
  ) { }

  getPlaylists(){
    this.api.getPlaylists().subscribe(res => {
      console.log(res);
      this.playlists = res;
    })
  }

  getPlaylist(id: number){
    this.api.getPlaylist(id).subscribe(res => {
      console.log(res);
      this.singlePlaylist = res[0];
    })
  }
}
