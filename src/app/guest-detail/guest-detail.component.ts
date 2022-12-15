import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {
  guest:Guest = new Guest();
  message:string;
  saveMessage:string;

  isFormValidated:boolean = false;

  constructor(private guestService:GuestService) { }

  ngOnInit(): void {
  }

  // on submit method to link to form
  onFormSubmit(form: NgForm):void {
    // clear values
    this.message = "";
    this.saveMessage = "";
    this.isFormValidated = false;

    // if form is invalid, leave this method
    if(form.invalid){
      return;
    }

    // else, get the new guest values from the form values
    this.guest = form.value;

    // create guest in guest service
    this.guestService.createGuest(this.guest).subscribe(
      id => {
        if(id > 0){
          // successful save
          this.saveMessage = `Customer Saved. New Id: ${id}`;
          // reset form
          this.guest = new Guest();
          form.resetForm();
          this.isFormValidated = true;
        } else {
          // an error occured creating a new guest
          this.message = "An error occured creating a guest";
        }
      }
    )
  }

}
