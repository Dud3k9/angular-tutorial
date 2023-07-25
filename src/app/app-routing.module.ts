import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "firstChapter",
    loadChildren: () =>
      import("./containers/first-chapter/first-chapter.module").then(
        (m) => m.FirstChapterModule
      ),
  },
  {
    path: "cards",
    loadChildren: () =>
      import("./containers/cards/cards.module").then(
        (m) => m.CardsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
