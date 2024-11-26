import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemons } from '../models/pokemons';
import { pikachu } from '../models/pikacu';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public url_all: string = "https://hackeps-poke-backend.azurewebsites.net/";
  public zones: string[] = [
    "67372c1c7a5c6e90024299e1",
    "67372c23ea45b856683249f4",
    "6737278e28aebf267e089bec",
    "67372c56ec018d7dedd34ee3",
    "67372c39c499cd12be6bef9e",
    "67372c61f269e28d2f86f063",
    "67372c4a591a6cbabccfc012",
    "67372c2a2219842167aa3e0c",
    "67372c44db061db993104ce1",
    "6710c41ed814fc8dae914171",
    "67372c31f895d5d1b4d6c2a9",
    "67372c686fa2f2902a4b7c2a"
  ];

  constructor(private http: HttpClient) {}

  get allPokemon(): Observable<any[]> {
    return this.http.get<any[]>(this.url_all + "pokemons");
  }

  getallZones(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

  get myTeam(): Observable<any[]>{
    return this.http.get<any[]>(this.url_all + "teams/68fc2c0f-6c0a-4600-a052-66f26a6b26d4");
  }

  getZonesByUrl(url:string): Observable<any[]>{
    return this.http.get<any[]>(url);
  }

  postZonesByUrl(url: string, id_team: any): Observable<any[]>{
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token-here' 
    });
    let all_url = this.url_all + "events/" + url;
    const body = {
      "team_id": id_team
    }
    const poke = this.http.post<any[]>(all_url, body, { headers });
    
    

    return poke;
  }

}
