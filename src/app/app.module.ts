import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestDetailComponent} from './guest-detail/guest-detail.component';
import { GuestsComponent } from './guests/guests.component';



@NgModule({
  declarations: [
    AppComponent,   
    GuestDetailComponent,
    GuestsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
