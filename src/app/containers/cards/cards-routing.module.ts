import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCardComponent } from "./components/add-card/add-card.component";
import { CardListComponent } from "./components/card-list/card-list.component";

const routes: Routes = [
    {
      path: "",
      children: [
        {path: "add", component: AddCardComponent},
        {path: "list", component: CardListComponent},
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CardsRoutingModule {}
  