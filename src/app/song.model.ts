import { Album } from './album.model';

export class Song
{
      Titolo: String ;
      Durata: number ;
      Data: Date;

    constructor(
        public album : Album,
        public data_uscita: Date,
        public durata : number,
        public title : String,

    ) {
         this.Titolo = title;
         this.Durata = durata;
         this.Data = data_uscita;

    }

}
