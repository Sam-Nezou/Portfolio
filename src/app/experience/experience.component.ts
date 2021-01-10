import { Component, OnInit } from '@angular/core';

class Experience {

  title: String;
  description: String;
  iconSrc: String;
  date: String;
  location: String;


  constructor(title: String, description: String, iconSrc: String, date: String, location: String) {
    this.title = title; //Titre de l'expérience
    this.description = description; // Description de l'expérience
    this.iconSrc = iconSrc;
    this.date = date;
    this.location = location;
  }
}


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }





  experiences: Array<Experience> = [
    new Experience("Vice Président BDE",
      "Refonte et création de site web via Wordpress",
      "Pas de source",
      "2018 - 2019",
      "Isen Brest"
    ),
    new Experience("Dévellopeur Web",
      "Refonte et création de site web via Wordpress",
      "Pas de source",
      "Juin à Août 2018",
      "Savel Lanilis"
    ),
    new Experience("Equipier / Formateur",
      "Contrat 15h semaine",
      "../../assets/images/icon/Experience/mcdoLogo.png",
      "Depuis Mai 2017",
      "Mcdonald's Landerneau"
    ),


  ]



}
