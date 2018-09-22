import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarAsideComponent } from './navbar/navbar-aside/navbar-aside.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { AnnouncerComponent } from './announcer/announcer.component';
import { WriterComponent } from './writer/writer.component';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CarouselModule } from 'primeng/carousel';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { RegisterWritersComponent } from './announcer/register-writers/register-writers.component';
import { EventsAnnoucementsCreationComponent } from './announcer/events-annoucements-creation/events-annoucements-creation.component';
import { ApproveContentComponent } from './announcer/approve-content/approve-content.component';
import { ContentCreationComponent } from './writer/content-creation/content-creation.component';
import { SendApprovalComponent } from './writer/send-approval/send-approval.component';
import { LoginComponent } from './login/login.component';
import { PreviewContentComponent } from './writer/preview-content/preview-content.component';
import { EventCarouselComponent } from './homepage/event-carousel/event-carousel.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    NavbarAsideComponent,
    EventRegistrationComponent,
    AnnouncerComponent,
    WriterComponent,
    AnnouncementsComponent,
    RegisterWritersComponent,
    EventsAnnoucementsCreationComponent,
    ApproveContentComponent,
    ContentCreationComponent,
    SendApprovalComponent,
    PreviewContentComponent,
    LoginComponent,
    EventCarouselComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    MenuModule,
    PanelMenuModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
