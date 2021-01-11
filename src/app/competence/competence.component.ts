import { Component, NgModule, OnInit } from '@angular/core';


class Icon {
  name: string;
  source: string;
  delay: string;
  alt: string;

  constructor(name: string, source: string, delay: string, alt: string) {
    this.name = name;
    this.source = source;
    this.delay = delay;
    this.alt = alt;
  }
}



@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})



export class CompetenceComponent implements OnInit {

  /*  Tableau contenant les icon pour la partie Dev logiciel*/

  dev_Logi_icons: Array<Icon> = [
    new Icon("Langage C", "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40", "0.15s", "Logo C"),
    new Icon("Langage C++", "https://icongr.am/devicon/cplusplus-original.svg?size=128&color=00ff40 ", "0.25s", "Logo C++"),
    new Icon("Langage Java", "https://icongr.am/devicon/java-original-wordmark.svg?size=128&color=00ff40 ", "0.35s", "Logo Java"),
    new Icon("Langage Python", "https://icongr.am/devicon/python-original.svg?size=128&color=00ff40 ", "0.45s", "Logo Python"),
    new Icon("Langage Assembler", "https://i.pinimg.com/originals/25/a8/5d/25a85d9e5057430d82273a3c75e73014.png", "0.55s", "Logo Assembler")
  ]
  /*  Tableau contenant les icon pour la partie Dev web*/
  dev_Web_icons: Array<Icon> = [
    new Icon("AngularJs", "https://icongr.am/devicon/angularjs-original.svg?size=128&color=00ff40", "0.15s", "Logo Angular"),
    new Icon("Symfony", "https://icongr.am/devicon/symfony-original.svg?size=128&color=00ff40", "0.25s", "Logo Symfony"),
    new Icon("Wordpress", "https://icongr.am/devicon/wordpress-plain.svg?size=128&color=currentColor", "0.35s", "Logo Wordpress"),
    new Icon("PHP", "https://icongr.am/devicon/php-original.svg?size=128&color=00ff40", "0.45s", "Logo PHP"),
    new Icon("HTML5", "https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=000000", "0.55s", "Logo HTML5"),
    new Icon("HTML5", "https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=000000", "0.55s", "Logo CSS3"),
    new Icon("Bootstrap", "https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=4d4d9b", "0.55s", "Logo Bootstrap")
  ]

  /*  Tableau contenant les icon pour la partie AudioVisuel*/

  audiovisuel_icons: Array<Icon> = [
    new Icon("Photophop", "https://icongr.am/simple/adobephotoshop.svg?size=128&color=426ddf&colored=false", "0.15s", "Logo Photoshop"),
    new Icon("Premiere pro", "https://icongr.am/simple/adobepremiere.svg?size=128&color=ff6aff&colored=false", "0.25s", "Logo Premiere Pro"),
  ]


  /*  Tableau contenant les icon pour la partie AudioVisuel*/

  BDD_icons: Array<Icon> = [
    new Icon("MySql", "https://icongr.am/devicon/mysql-original-wordmark.svg?size=128&color=currentColor", "0.15s", "Logo MySql"),
    new Icon("Conception", "https://www.alexandre-thomas.fr/assets/img/icons/skills/cdm.webp", "0.25s", "Logo Conception")
  ]

  /* Tableau contenant les icon pour la partie Les plus*/

  plus_icons: Array<Icon> = [
    new Icon("Linux", "https://icongr.am/devicon/linux-original.svg?size=128&color=000000", "0.15s", "Logo Linux"),
    new Icon("STM8", "../../assets/images/icon/STM_icon.png", "0.25s", "Logo STM8"),
    new Icon("FPGA", "../../assets/images/icon/FPGAs_icon.png", "0.35s", "Logo FPGA"),
    new Icon("Visual Studio Code", ".../../assets/images/icon/vscode_icon.png", "0.45s", "Logo VS Code"),
    new Icon("Suite Office", ".../../assets/images/icon/office_icon.png", "0.55s", "Logo Suite Office"),
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
