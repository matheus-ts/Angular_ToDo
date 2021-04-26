import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() public arrayItems: string[] = [
    "Fazer Café",
    "Terminar o curso",
    "Mandar emails",
  ];

  constructor() {}

  ngOnInit(): void {}
}
