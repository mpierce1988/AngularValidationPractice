import { Component, OnInit } from '@angular/core';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  guests: Guest[] = [];

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() : void {
    this.guestService.getAll().subscribe(guests => {
      this.guests = guests;
      console.log(this.guests);
    })
  }

}
