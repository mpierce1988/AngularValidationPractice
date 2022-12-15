import { Guest } from "../models/guest";

 
 export let GUESTS: Guest[] = [
     {
         id: 1,
         firstName: "Steve",
         lastName: "Jobs",
         birthDate: new Date(1952, 5, 22),
         isVIP: true
     },
     {
         id: 2,
         firstName: "Steve",
         lastName: "Wozniack",
         birthDate: new Date(1954, 6, 7),
         isVIP: true
     },
     {
         id: 3,
         firstName: "Bill",
         lastName: "Gates",
         birthDate: new Date(1961, 4, 12),
         isVIP: false
     },
     {
         id: 4,
         firstName: "Ada",
         lastName: "Lovelace",
         birthDate: new Date(1815, 11, 10),
         isVIP: true
     },
 ]
