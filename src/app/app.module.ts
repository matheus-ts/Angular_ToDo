import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './to-do/pages/main/main.component';
import { CardComponent } from './to-do/components/card/card.component';

@NgModule({
  declarations: [AppComponent, MainComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
