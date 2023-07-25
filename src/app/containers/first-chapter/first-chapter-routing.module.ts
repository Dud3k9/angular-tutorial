import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PipeComponent } from "./components/pipe/pipe.component";
import { DirectiveComponent } from "./components/directive/directive.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "pipe",
        component: PipeComponent,
      },
      {
        path: "directive",
        component: DirectiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstChapterRoutingModule {}
