import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { Observable } from "rxjs";
import { Card } from "../../models/card.model";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
})
export class CardListComponent implements OnInit {
  cards$: Observable<Card[]>;

  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.getCards();
  }

  ngOnInit() {}
}
