import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { ContentSidebarComponent } from './components/content-sidebar/content-sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';

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
import { AnnouncementCreationComponent } from './announcer/announcement-creation/announcement-creation.component';
import { EventCarouselComponent } from './homepage/event-carousel/event-carousel.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnnouncerRegistrationComponent } from './registration/announcer/announcer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastComponent } from './components/toast/toast.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

import { MessageService, ConfirmationService } from 'primeng/api';
import { TodayUpcomingComponent } from './homepage/today-upcoming/today-upcoming.component';

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
    LoginComponent,
    AnnouncementCreationComponent,
    EventCarouselComponent,
    BannerComponent,
    ContentSidebarComponent,
    PageNotFoundComponent,
    AnnouncerRegistrationComponent,
    LoaderComponent,
    ToastComponent,
    TodayUpcomingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CardModule,
    MenuModule,
    PanelMenuModule,
    CarouselModule,
    HttpClientModule,
    NgbCarouselModule,
    SidebarModule,
    FormsModule,
    LMarkdownEditorModule,
    MarkdownModule.forRoot(),
    AutoCompleteModule,
    ReactiveFormsModule,
    DialogModule,
    ToastModule,
    BlockUIModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
