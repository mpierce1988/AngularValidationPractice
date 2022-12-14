import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestComponent } from './models/guest/guest.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    GuestsComponent,
    GuestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
