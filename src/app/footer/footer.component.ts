import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { LicenseComponent } from '../license/license.component';
 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private dialog :MatDialog) { }

  ngOnInit(): void {
  }

  onCreate(){
    this.dialog.open(LicenseComponent);
  }
}
