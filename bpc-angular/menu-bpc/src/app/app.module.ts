import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { OffertaSpecialeComponent } from './components/offerta-speciale/offerta-speciale.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/angular-material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroContentComponent,
    OffertaSpecialeComponent,
    MenuComponent,
    MenuSectionComponent,
    MenuItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
