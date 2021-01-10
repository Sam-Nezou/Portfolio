import { Component, OnInit } from '@angular/core';




class LicenseUser {

  author: string;
  authorSource: string;
  siteSource: string;
  site: string;

  constructor(author: string, authorSource: string, siteSource: string, site:string) {
    this.author = author;
    this.authorSource = authorSource;
    this.siteSource = siteSource;
    this.site = site;
  }

}


@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  IconLicenses : Array<LicenseUser> = [
    new LicenseUser("Freepik","https://www.flaticon.com/fr/auteurs/freepik","https://www.flaticon.com","www.flaticon.com"),
  ]

  FontLicenses : Array<LicenseUser> = [
    new LicenseUser("MadeType","https://www.behance.net/madetype","https://www.dafont.com/fr/made-tommy.font","www.dafont.com"),
  ]

  DesignLicenses : Array<LicenseUser> = [
    new LicenseUser("Hassan Kamal","https://codepen.io/hassan-kamal/pen/NNvYEQ","https://codepen.io/","www.codepen.io"),
  ]


}
