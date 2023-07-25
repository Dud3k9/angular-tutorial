import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstChapterRoutingModule } from "./first-chapter-routing.module";
import { PipeComponent } from "./components/pipe/pipe.component";
import { DirectiveComponent } from "./components/directive/directive.component";
import { HelloAngularPipe } from "./components/pipe/hello-angular.pipe";
import { CardStatsSortPipe } from "./components/pipe/card-stats-sort.pipe";
import { SetColorDirective } from "./components/directive/set-color.directive";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PipeComponent,
    DirectiveComponent,
    HelloAngularPipe,
    CardStatsSortPipe,
    SetColorDirective,
  ],
  imports: [CommonModule, FirstChapterRoutingModule, FormsModule],
})
export class FirstChapterModule {}
