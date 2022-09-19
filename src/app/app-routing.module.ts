import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Service', component: ServiceComponent},
  {path: 'Contact', component: ContactComponent},
  { path: 'Recruitment', component: RecruitmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
