import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";

import { MaterialAppModule } from "./material-app.module";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, SideNavbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialAppModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
