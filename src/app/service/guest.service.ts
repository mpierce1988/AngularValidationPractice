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
}
