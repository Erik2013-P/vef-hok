import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DormitoryComponent } from './dormitory/dormitory.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LibraryComponent } from './library/library.component';
import { NewsComponent } from './news/news.component';
import { DocumentsComponent } from './documents/documents.component';
import { StudentloanComponent } from './studentloan/studentloan.component';
import { NeptunComponent } from './neptun/neptun.component';
import { FaqComponent } from './faq/faq.component';
import { GaleryComponent } from './galery/galery.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DormitoryComponent,
    StudentsComponent,
    NavbarComponent,
    LibraryComponent,
    NewsComponent,
    DocumentsComponent,
    StudentloanComponent,
    NeptunComponent,
    FaqComponent,
    GaleryComponent,
    OrganisationComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
