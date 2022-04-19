import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getAllRickMorty(nameCharacter: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/`, {
      params: {name: nameCharacter}
    }
     )
  }

  getAllRickMortyID(idCharacter: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${idCharacter}`)
  }


}
