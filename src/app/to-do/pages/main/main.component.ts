import { Component, OnInit } from "@angular/core";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  public novoItem: string = "";

  constructor() {}
  ngOnInit(): void {}

  adcionarItem() {
    console.log(this.novoItem);

    if (this.novoItem != "" || this.novoItem != null) {
      let card = new CardComponent();

      card.arrayItems.push(this.novoItem);
      console.log(this.novoItem);
      console.log(card.arrayItems);
    }
  }
}
