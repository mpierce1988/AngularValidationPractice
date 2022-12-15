import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  minDate:Date;
  btnText:string;

  isFormValidated:boolean = false;

  constructor(private guestService:GuestService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMinDate();
    this.checkForGuestId();
    this.setBtnText();
  }

  setBtnText():void {
    if(this.guest.id != null && this.guest.id != 0){
      this.btnText = "Edit";
    } else {
      this.btnText = "Create";
    }
  }

  checkForGuestId():void {
    this.activatedRoute.paramMap.subscribe(params => {
      let guestId: number = Number.parseInt(params.get("id"));

      if(isNaN(guestId)){
        // no guest id in path parameter, this is a new guest form
        this.guest = new Guest();
      } else {
        // there is a guest id, this is an edit form
        // get guest and save to local guest variable
        this.guestService.getGuestById(guestId).subscribe(guest => {
          this.guest = guest;
        })
      }
    })
  }

  getMinDate():void {
    let minDate = new Date();
    minDate.setUTCFullYear(minDate.getUTCFullYear() - 18);
    this.minDate = minDate;
    console.log('Min date is: ' + this.minDate);
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
    

    // check if update or new guest
    if(this.guest.id != null && this.guest.id != 0){
      // update
      let guestId = this.guest.id;
      this.guest = form.value;
      this.guest.id = guestId;
      console.log("UPDATING GUEST");
      this.guestService.updateGuest(this.guest).subscribe(
        result => {
          if(result){
            // successfully saved
            this.saveMessage = `Customer Updated`;
            this.isFormValidated = true;
          } else {
            this.message = `Failed to update customer with id ${this.guest.id}`;
          }
        }
      )
    } else {
      this.guest = form.value;
      console.log("CREATING GUEST");
      // new guest
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

  delete() : void {
    if(this.guest.id == null || this.guest.id == 0){
      // cannot delete
      return;
    }

    this.guestService.deleteGuest(this.guest.id).subscribe(result => {
      if(result){
        this.saveMessage = "Guest Deleted";
        // reset form
        this.guest = new Guest();
        this.message = "";
        this.isFormValidated = true;
      } else {
        this.message = "Cannot delete guest with id " + this.guest.id;
      }
    })
  }

}
