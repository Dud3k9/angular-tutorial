import { Component, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { Card } from "../../models/card.model";
import { AddCardState } from "./ui/add-card-state-notification/add-card-state.enum";
import { CardService } from "../../services/card.service";

@Component({
  selector: "app-add-card",
  templateUrl: "./add-card.component.html",
  styleUrls: ["./add-card.component.css"],
})
export class AddCardComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  addCardState: AddCardState = AddCardState.Empty;
  constructor(private cardService: CardService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleAddNewCard(newCard: Card) {
    this.cardService
      .createCard(newCard)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        //Wspomnieć że interceptor lepszy
        next: () => {
          this.addCardState = AddCardState.AddSuccess;
        },
        error: () => {
          this.addCardState = AddCardState.AddError;
        },
      });
  }
}
