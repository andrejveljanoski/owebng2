import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieCardModule } from './movie-card/movie-card.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MovieCardModule, NavbarComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
