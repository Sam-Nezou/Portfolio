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



  LicenseUsers : Array<LicenseUser> = [
    new LicenseUser("Freepik","https://www.flaticon.com/fr/auteurs/freepik","https://www.flaticon.com","www.flaticon.com"),
    new LicenseUser("Freepik","https://www.flaticon.com/fr/auteurs/freepik","https://www.flaticon.com","www.flaticon.com")
  ]

}
