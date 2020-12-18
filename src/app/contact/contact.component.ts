import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  phone_number ="06.20.81.40.53"
  email_perso = "sam.nezou@gmail.com"
  email_isen = " samuel.nezou@isen-ouest.yncrea.fr"
  localisation = "Brest, Bretagne"
  

}
