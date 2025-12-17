import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },{
    path:'services',
    component:ServicesComponent
  },{
    path:'t&c',
    component:TermsComponent
  },
  {
path:'aboutus',
component:AboutUsComponent
  },
  {
path:'contactus',
component:ContactUsComponent
  },
  {
    path:'',
    redirectTo:"home",
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
