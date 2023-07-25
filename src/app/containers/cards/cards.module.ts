import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardListComponent } from "./components/card-list/card-list.component";
import { AddCardComponent } from "./components/add-card/add-card.component";
import { CardsRoutingModule } from "./cards-routing.module";
import { AddCardFormComponent } from "./components/add-card/ui/add-card-form/add-card-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardService } from "./services/card.service";
import { AddCardStateNotificationComponent } from "./components/add-card/ui/add-card-state-notification/add-card-state-notification.component";

@NgModule({
  imports: [CommonModule, CardsRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    CardListComponent,
    AddCardComponent,
    AddCardFormComponent,
    AddCardStateNotificationComponent,
  ],
  providers: [CardService],
})
export class CardsModule {}
