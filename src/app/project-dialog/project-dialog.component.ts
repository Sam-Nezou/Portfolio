import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
