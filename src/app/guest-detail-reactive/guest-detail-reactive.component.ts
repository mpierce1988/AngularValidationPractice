import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Guest } from '../models/guest';
import { GuestService } from '../service/guest.service';

@Component({
  selector: 'app-guest-detail-reactive',
  templateUrl: './guest-detail-reactive.component.html',
  styleUrls: ['./guest-detail-reactive.component.css']
})
export class GuestDetailReactiveComponent implements OnInit {
  guest:Guest = new Guest();
  message:string;
  saveMessage:string;
  btnMessage:string;

  isValidFormSubmitted:boolean = false;
  submitted:boolean = false;

  // for reactive forms, create a FormGroup
  guestForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    birthDate: new FormControl(new Date(), [Validators.required]),
    isVIP: new FormControl(false)
  })

  get firstName() {
    return this.guestForm.get('firstName');
  }

  get lastName() {
    return this.guestForm.get('lastName');
  }

  get birthDate() {
    return this.guestForm.get('birthDate');
  }

  get isVIP() {
    return this.guestForm.get('isVIP');
  }

  constructor(private guestService:GuestService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.checkForGuestID();
  }

  checkForGuestID(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id: number = Number.parseInt(params.get('id'));

      if(isNaN(id)){
        // no guest id, this is a create
        this.guest = new Guest();
        this.btnMessage = "Create";
      } else {
        // guest ID found, this is an edit
        // get guest from service and assign to local guest variable
        this.guestService.getGuestById(id).subscribe(guest => {
          if(guest == null || guest == undefined){
            // no guest found for this id
            this.message = "No guest found with the id " + id;
          } else {
            // guest found, assign locally
            this.guest = guest;
            this.btnMessage = "Save";
            // add current guest values to the form            
            this.guestForm.setValue(this.guest);
            this.guestForm.get("birthDate").setValue(this.guest.birthDate.toISOString().substring(0,10));
          }
        })
      }
    })
  }

  onSubmit() : void {
    // clear values
    this.isValidFormSubmitted = false;
    this.submitted = true;
    this.message = '';
    this.saveMessage = '';

    // exit method if form is invalid
    if(this.guestForm.invalid){
      return;
    }

    if(this.guest.id != null && this.guest.id > 0){
      // this is an update
      let guestId = this.guest.id;
      this.guest = this.guestForm.value;
      this.guest.id = guestId;

      this.guestService.updateGuest(this.guest).subscribe(result => {
        if(result){
          this.saveMessage = `Updated Guest`;
          this.isValidFormSubmitted = true;
        } else {
          this.message = "An error occured while updating the guest";
        }
      })
    } else {
      // this is a create
      this.guest = this.guestForm.value;

      this.guestService.createGuest(this.guest).subscribe(id => {
      if(id > 0){
        this.saveMessage = `Customer Saved with id: ${id}`;
        this.guest = new Guest();
        this.guestForm.reset();
        this.isValidFormSubmitted = true;
      } else {
        this.message = "An error occured while creating a guest";
      }
    })
    }

    // otherwise, create or save guest
    
  }
}
