import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { PromoComponent } from './promo/promo.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';
import { FeatureComponent } from './feature/feature.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environement/environement';
import { ForgortPasswordComponent } from './forgort-password/forgort-password.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { NetworkComponent } from './network/network.component';
import { PartnersComponent } from './partners/partners.component';
import { SharedHostingComponent } from './shared-hosting/shared-hosting.component';
import { FaServerComponent } from './fa-server/fa-server.component';
import { WpHostingComponent } from './wp-hosting/wp-hosting.component';
import { SharedWpHostingComponent } from './shared-wp-hosting/shared-wp-hosting.component';
import { EmailHostingComponent } from './email-hosting/email-hosting.component';
import { CloudHostingComponent } from './cloud-hosting/cloud-hosting.component';
import { DedicatedServerHostingComponent } from './dedicated-server-hosting/dedicated-server-hosting.component';
import { VpsHostingComponent } from './vps-hosting/vps-hosting.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FooterComponent,
    HeaderComponent,
    PreloaderComponent,
    RegisterComponent,
    LoginComponent,
    HeroComponent,
    PromoComponent,
    ServicesComponent,
    PriceComponent,
    FeatureComponent,
    ForgortPasswordComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    NetworkComponent,
    PartnersComponent,
    SharedHostingComponent,
    FaServerComponent,
    WpHostingComponent,
    SharedWpHostingComponent,
    EmailHostingComponent,
    CloudHostingComponent,
    DedicatedServerHostingComponent,
    VpsHostingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //NgxPaginationModule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
