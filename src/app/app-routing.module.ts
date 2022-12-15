import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';
import { GuestsComponent } from './guests/guests.component';

const routes: Routes = [
  { path: "", redirectTo: "/guests", pathMatch: "full"},
  { path: "guests", component: GuestsComponent},
  { path: "guests/create", component: GuestDetailComponent},
  { path: "guests/:id", component: GuestDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
