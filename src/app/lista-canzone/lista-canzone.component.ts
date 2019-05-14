import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../song.model';

@Component({
    selector: 'app-lista-canzone',
    templateUrl: './lista-canzone.component.html',
    styleUrls: ['./lista-canzone.component.css']
})
export class ListaCanzoneComponent implements OnInit {

    @Input() songList: Song[];

    o: Observable<Object>;

    nascondi = false;

    constructor(public http: HttpClient) {
        this.makeTypedRequest()
    }

    ngOnInit() {
    }

    onNascondi(): void {

        console.log(this.nascondi);

        // this.nascondi ? this.nascondi = false : this.nascondi = true;

        if (this.nascondi == true) {
            this.nascondi = false;
        } else {
            this.nascondi = true;
        }
    }

    makeTypedRequest(): void {
        //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
        this.o = this.http.get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/songlist');
        this.o.subscribe(d => {
            console.log(d);
            var a: any = d;
            a.forEach(element => {
                console.log(element);
                this.songList.push(element);
            });
        });
    }

    getData = (d: Object) => {
        console.log(d);
        var a: any = d;
        a.forEach(element => {
            console.log(element);
        });
    }
}
