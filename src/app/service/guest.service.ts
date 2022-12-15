import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Guest } from '../models/guest';
import { GUESTS } from '../mocks/guest-mocks';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor() { }

  public getAll(): Observable<Guest[]> {
    return of(GUESTS);
  }

  public getGuestById(id:number):Observable<Guest> {
    let guest = GUESTS.find(g => g.id == id);
    return of(guest);
  }

  public createGuest(guest:Guest): Observable<number> {
    let newId = GUESTS.length + 1;
    guest.id = newId;
    GUESTS.push(guest);
    
    return of(newId);
  }

  public updateGuest(guest:Guest): Observable<boolean> {
    let guestId = guest.id;
    let oldGuest = GUESTS.find(g => g.id == guest.id);

    if(oldGuest == null){
      // no existing guest found with that id
      return of(false);
    }

    let indexOldGuest = GUESTS.indexOf(oldGuest);
    // insert new guest
    GUESTS[indexOldGuest] = guest;
    // return true after successful update
    return of(true);
  }

  public deleteGuest(id:number): Observable<boolean> {
    let guestToDelete = GUESTS.find(g => g.id == id);
    if(guestToDelete == null){
      return of(false);
    }

    GUESTS.splice(GUESTS.indexOf(guestToDelete), 1);
    return of(true);
  }
}
