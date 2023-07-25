import { Component, Input, OnInit } from "@angular/core";
import { AddCardState } from "./add-card-state.enum";

@Component({
  selector: "app-add-card-state-notification",
  templateUrl: "./add-card-state-notification.component.html",
  styleUrls: ["./add-card-state-notification.component.css"],
})
export class AddCardStateNotificationComponent implements OnInit {
  readonly addCardStates = AddCardState;
  @Input({ required: true }) state!: AddCardState;
  constructor() {}

  ngOnInit() {}
}
