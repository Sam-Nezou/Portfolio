import { Component, OnInit } from '@angular/core';

class Experience {

  title: String;
  description: String;
  iconSrc: String;
  dateStart: Date;
  dateEnd: Date;
  location: String;


  constructor(title: String, description: String, iconSrc: String, dateStart: Date,dateEnd: Date, location: String) {
    this.title = title; //Titre de l'expérience
    this.description = description; // Description de l'expérience
    this.iconSrc = iconSrc;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
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

todayDate =new Date();


  formations: Array<Experience> = [
    new Experience("Cycle Ingénieur",
      "Majeur Cybersécurité",
      "",
      new Date("2020-09"),
      new Date(),
      "ISEN Brest"),
    new Experience("Cycle Informatique et réseaux",
      "Classe préparatoire",
      "",
      new Date("2016-09"),
      new Date("2019-09"),
      "ISEN Brest")

  ]

  experiences: Array<Experience> = [
    new Experience("Vice Président BDE",
      "Refonte et création de site web via Wordpress",
      "../../assets/images/icon/Experience/cosmuLogo.png",
      new Date("2018-05"),
      new Date("2019-05"),
      "Isen Brest"
    ),
    new Experience("Développeur Web",
      "Refonte et création de site web via Wordpress",
      "Pas de source",
      new Date("2018-06"),
      new Date("2018-08"),
      "Savel Lanilis"
    ),
    new Experience("Equipier / Formateur",
      "Contrat 15h semaine",
      "../../assets/images/icon/Experience/mcdoLogo.png",
      new Date("2017-05"),
      new Date(),
      "Mcdonald's Landerneau"
    ),

  ]

}
