import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompetenceComponent } from './competence/competence.component';
import { NgwWowModule } from 'ngx-wow';
import { ContactComponent } from './contact/contact.component';
import { LicenseComponent } from './license/license.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { CvDialogComponent } from './cv-dialog/cv-dialog.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CompetenceComponent,
    ContactComponent,
    LicenseComponent,
    FooterComponent,
    ResumeComponent,
    ExperienceComponent,
    ProjectComponent,
    CvDialogComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    NgbModule,
    NgwWowModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports:[
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LicenseComponent]
})
export class AppModule { }
