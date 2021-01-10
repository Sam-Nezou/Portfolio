import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {


  imgSource ="../../assets/images/pp.jpeg";
  text_resume = "Etudiant à l'ISEN M1 - Ecole de Haute Technologie et Ingénierie Numérique. Je suis à la recherche d'un stage technique de 3 mois à partir du 3 mai 2021 et d'une alternance à la suite de celui-ci. "
  constructor(private modalService: NgbModal) { }
  
  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {size:'xl'});
  }
}

