import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PartnersComponent } from './partners/partners.component';
import { NetworkComponent } from './network/network.component';
import { BlogComponent } from './blog/blog.component';
import { SharedHostingComponent } from './shared-hosting/shared-hosting.component';
import { FaServerComponent } from './fa-server/fa-server.component';
import { WpHostingComponent } from './wp-hosting/wp-hosting.component';
import { SharedWpHostingComponent } from './shared-wp-hosting/shared-wp-hosting.component';
import { EmailHostingComponent } from './email-hosting/email-hosting.component';
import { CloudHostingComponent } from './cloud-hosting/cloud-hosting.component';
import { DedicatedServerHostingComponent } from './dedicated-server-hosting/dedicated-server-hosting.component';
import { VpsHostingComponent } from './vps-hosting/vps-hosting.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'acceuil',pathMatch:'full'},
  {path:'acceuil',component:AcceuilComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'partners',component:PartnersComponent},
  {path:'network',component:NetworkComponent},
  {path:'blog',component:BlogComponent},
  {path:'shared-hosting',component:SharedHostingComponent},
  {path:'fa-server',component:FaServerComponent},
  {path:'wp-hosting',component:WpHostingComponent},
  {path:'shared-wp-hosting',component:SharedWpHostingComponent},
  {path:'email-hosting',component:EmailHostingComponent},
  {path:'cloud-hosting',component:CloudHostingComponent},
  {path:'dedicated-server-hosting',component:DedicatedServerHostingComponent},
  {path:'vps-hosting',component:VpsHostingComponent},
  {path:'contact',component:ContactComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
