import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';



class Project {
  title: string;
  date: Date;
  description: string;
  src: Array<string>;
  techno: Array <string>;
  rapportSrc:string;

  constructor(title: string, date : Date, description: string,src:Array<string>, techno: Array<string>, rapportSrc: string) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.src = src;
    this.techno = techno;
    this.rapportSrc = rapportSrc;
  }
}





@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  onCreate(project :Project){
    
    this.dialog.open(ProjectDialogComponent,
      {
        data:{
          project 
        }
      }
      );
  }


  tab_project: Array<Project> = [
    new Project("Projet Cir 1", 
                new Date(),
                "         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eget arcu a efficitur. Quisque semper leo erat, non gravida ante egestas vitae. Integer ut placerat purus. Quisque posuere vel libero ut scelerisque. Proin tempus, augue a fermentum aliquet, lorem lacus aliquet libero, quis cursus eros diam vitae justo. Pellentesque nec nibh augue. Donec eu consequat eros. Ut imperdiet velit nec lacus accumsan, sed facilisis ipsum pellentesque. Phasellus hendrerit massa lacus, eu venenatis eros facilisis eu. Duis nec fringilla justo.               Vivamus ullamcorper turpis sed vestibulum ornare. Donec in placerat arcu, at hendrerit est. Sed rutrum, libero ut varius dapibus, magna ante luctus libero, eu porta metus odio a odio. Donec mollis leo quis laoreet sollicitudin. Nunc semper orci ut pretium accumsan. Aliquam sed suscipit lorem, vitae posuere urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc lectus quam, efficitur sit amet maximus vitae, semper consequat nibh. Praesent eu quam vitae libero eleifend vehicula. Nullam eu suscipit justo. Quisque sit amet augue suscipit, blandit arcu vel, malesuada nibh. Morbi porta risus eros. Suspendisse faucibus purus neque, in pellentesque odio viverra in. Aenean et commodo sem.          Aenean fermentum elit in ex viverra rutrum. Nunc orci mauris, sagittis ac scelerisque nec, fermentum id lectus. Pellentesque ornare ante sit amet dignissim vestibulum. Nullam vestibulum molestie imperdiet. Ut sollicitudin consectetur erat id hendrerit. Maecenas dignissim nec ipsum at sollicitudin. Aliquam lacus dolor, volutpat a nulla sit amet, posuere aliquet odio. Curabitur sed dui nisi. Praesent non suscipit magna, ac vulputate ex. In hac habitasse platea dictumst. Aliquam dictum, purus et finibus mattis, risus ante lacinia dui, non sagittis lectus odio sed ipsum. Maecenas feugiat tempor nibh quis blandit. Morbi vulputate auctor mollis. Cras commodo imperdiet odio et accumsan.Integer non scelerisque diam, at placerat ex. Ut ut nunc fringilla, consectetur tortor sed, scelerisque mauris. Praesent ipsum quam, mollis ultrices orci sed, mollis molestie tortor. Donec in ultrices nulla, eget eleifend augue. Maecenas quis nulla risus. Nullam quis quam in enim venenatis iaculis. Sed in consectetur nisi, eu tincidunt orci. Aenean ornare interdum massa eget scelerisque. Nulla facilisi. Pellentesque nec nibh a nisi euismod tincidunt. Cras sed cursus nisl.                Vestibulum placerat semper gravida. Maecenas mollis diam lacus, sed porta mi vehicula ultrices. Pellentesque sit amet mattis magna. Cras ac leo cursus, rutrum enim vel, aliquet neque. Mauris volutpat velit nec eros gravida sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dapibus blandit augue eu tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac purus nec justo tincidunt fermentum sed in lectus. Praesent rutrum magna nec ligula dignissim ultrices. In vel magna eleifend, cursus odio quis, consectetur metus. Duis sit amet consequat ligula. Nam vulputate tortor lectus, sed ullamcorper dui cursus vitae. Nullam interdum dignissim ipsum, in dictum urna porta nec. Fusce pulvinar urna id dapibus fermentum. Sed a felis mollis, hendrerit turpis at, porttitor lectus. ",[
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                ],
                ["Lorem", "djhada", "jiadjzi"],
                "",
                ),
    new Project("Projet Cir 3", 
                new Date(),
                "huihaudzaudiahdza",[
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                ],
                ["Lorem", "djhada", "jiadjzi"],
                "",
                ),
    new Project("Projet Cir 2", 
                new Date(),
                "huihaudzaudiahdza",[
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                "https://icongr.am/devicon/c-original.svg?size=128&color=00ff40",
                ],
                ["Lorem", "djhada", "jiadjzi"],
                "",
                ),
   
  ]
}
