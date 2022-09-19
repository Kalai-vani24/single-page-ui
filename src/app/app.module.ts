import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';


import { AboutComponent } from './about/about.component';

import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    RecruitmentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDropdownModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
