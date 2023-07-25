import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Card } from "../models/card.model";
import { Observable } from "rxjs";

@Injectable()
export class CardService {
  readonly apiUrl = "http://localhost:3000/api/cards";

  constructor(private readonly httpClient: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl);
  }

  createCard(newCard: Card): Observable<number> {
    return this.httpClient.post<number>(this.apiUrl, newCard);
  }
}
