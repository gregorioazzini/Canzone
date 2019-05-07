import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'app-appuntamento',
  templateUrl: './appuntamento.component.html',
  styleUrls: ['./appuntamento.component.css']
})
export class ListaCanzoneComponent implements OnInit {
  @Input() songList: Song[];
  constructor() { }

  ngOnInit() {
  }

}
