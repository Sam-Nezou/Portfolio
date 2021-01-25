import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CvDialogComponent } from '../cv-dialog/cv-dialog.component';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private dialog :MatDialog) { }

  imgSource ="../../assets/images/pp.jpeg";
  text_resume = "Etudiant à l'ISEN M1 - Ecole de Haute Technologie et Ingénierie Numérique. Je suis à la recherche d'un stage technique de 3 mois à partir du 3 mai 2021 et d'une alternance à la suite de celui-ci. "
  
  ngOnInit(): void {
  }



  
  
  onCreate(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '1000';
    dialogConfig.maxHeight = '1000';

    this.dialog.open(CvDialogComponent,dialogConfig);
  }
}

