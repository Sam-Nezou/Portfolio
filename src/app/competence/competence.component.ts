import { Component, NgModule, OnInit } from '@angular/core';
import {CompetenceService} from './competence.service'

export class Icon {
  name: string;
  img_source: string;
  secName: string;

  constructor(name: string, source: string, secName: string) {
    this.name = name;
    this.img_source = source;
    this.secName =secName;
  }
}



@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})



export class CompetenceComponent implements OnInit {


 
  error ='';
  success ='';
  icons_dev_logi: Icon[];
  icons_dev_web: Icon[];
  icons_audiovisuel: Icon[];
  icons_bdd: Icon[];
  icons_more: Icon[];



  constructor(private competenceService : CompetenceService)  { }

  ngOnInit(): void {
   for(let i=1; i<=5; i++){
    this.getIcons(i);

   }
  }


  getIcons(  value : number): void{
    this.competenceService.getIcons(value).subscribe(
      (res: Icon[]) => {

        switch (value){
          case 1:
            this.icons_dev_logi = res;
            break;
          case 2:
            this.icons_dev_web = res;
            break
          case 3:
            this.icons_audiovisuel = res;
            break;
          case 4:
            this.icons_bdd = res;
            break;
          case 5:
            this.icons_more = res;
            break;

        }

      },
      (err) => {
        this.error = err;
      }
    );
  }

}
