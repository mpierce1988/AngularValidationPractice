import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestDetailComponent} from './guest-detail/guest-detail.component';
import { GuestsComponent } from './guests/guests.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GuestService } from './service/guest.service';
import { GuestDetailReactiveComponent } from './guest-detail-reactive/guest-detail-reactive.component';




@NgModule({
  declarations: [
    AppComponent,   
    GuestDetailComponent,
    GuestsComponent,
    NavbarComponent,
    GuestDetailReactiveComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GuestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
