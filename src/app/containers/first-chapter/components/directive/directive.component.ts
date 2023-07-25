import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directive",
  templateUrl: "./directive.component.html",
  styleUrls: ["./directive.component.css"],
})
export class DirectiveComponent {
  access = false;
  cardStats = [
    {
      name: "Mały",
      count: 43,
    },
    {
      name: "Duży",
      count: 15,
    },
    {
      name: "Łukasz",
      count: 27,
    },
    {
      name: "Asia",
      count: 32,
    },
  ];
  customDirectiveColor: any;

  handleCheckboxChange(event: any) {
    this.access = event.target.checked;
  }
}
