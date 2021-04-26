import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./core/app-routing.module";
import { AppComponent } from "./app.component";

import { MainComponent } from "./to-do/pages/main/main.component";
import { CardComponent } from "./to-do/components/card/card.component";
import { ButtonComponent } from "./to-do/components/button/button.component";
import { ItemComponent } from "./to-do/components/item/item.component";
import { ModalComponent } from "./to-do/components/modal/modal.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    ButtonComponent,
    ItemComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
