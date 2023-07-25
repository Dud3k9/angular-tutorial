import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.css"],
})
export class PipeComponent {
  name = "Maciej";
  currentDate = new Date();
  obj = {
    dupa: 1,
    siur: "rzaba",
  };
}
