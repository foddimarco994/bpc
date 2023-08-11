import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { OffertaSpecialeComponent } from './components/offerta-speciale/offerta-speciale.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { DolciComponent } from './components/dolci/dolci.component';
import { BevandeComponent } from './components/bevande/bevande.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroContentComponent,
    OffertaSpecialeComponent,
    MenuComponent,
    MenuSectionComponent,
    DolciComponent,
    BevandeComponent,
    MenuItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
