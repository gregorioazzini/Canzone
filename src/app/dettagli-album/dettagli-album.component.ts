import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-dettagli-album',
  templateUrl: './dettagli-album.component.html',
  styleUrls: ['./dettagli-album.component.css']
})
export class DettagliAlbumComponent implements OnInit {
 @Input() selectedAlbum = Album;
  constructor() { }

  ngOnInit() {
  }

}
