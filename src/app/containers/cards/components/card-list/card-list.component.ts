import { Component, OnInit } from "@angular/core";
import { CardService } from "../../services/card.service";
import { BehaviorSubject, Observable, Subject, switchMap, tap } from "rxjs";
import { Card } from "../../models/card.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"],
})
export class CardListComponent {
  //data
  cards$: Subject<Card[]> = new Subject();

  //triggers
  private refreshCards$ = new BehaviorSubject<void>(undefined);
  addCard$ = new Subject<Card>();

  constructor(private cardService: CardService) {
    //events
    this.refreshCards$
      .pipe(
        takeUntilDestroyed(),
        switchMap(() => this.cardService.getCards()),
        tap((newCards) => this.cards$.next(newCards))
      )
      .subscribe();

    this.addCard$
      .pipe(
        takeUntilDestroyed(),
        switchMap((newCard) => this.cardService.createCard(newCard)),
        tap(() => this.refreshCards$.next())
      )
      .subscribe();
  }
}
