import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestDetailReactiveComponent } from './guest-detail-reactive/guest-detail-reactive.component';
import { GuestDetailComponent } from './guest-detail/guest-detail.component';
import { GuestsComponent } from './guests/guests.component';

const routes: Routes = [
  { path: "", redirectTo: "/guests", pathMatch: "full"},
  { path: "guests", component: GuestsComponent},
  { path: "guests/create", component: GuestDetailComponent},
  { path: "guests/createReactive", component: GuestDetailReactiveComponent},
  { path: "guests/:id", component: GuestDetailReactiveComponent}
  // { path: "guests/:id", component: GuestDetailReactiveComponent} Reactive Details Form
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
