import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { LoginComponent } from './login/login.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { RegisterWritersComponent } from './announcer/register-writers/register-writers.component';
import { EventsAnnoucementsCreationComponent } from './announcer/events-annoucements-creation/events-annoucements-creation.component';
import { ApproveContentComponent } from './announcer/approve-content/approve-content.component';
import { ContentCreationComponent } from './writer/content-creation/content-creation.component';
import { SendApprovalComponent } from './writer/send-approval/send-approval.component';
import { AuthGuard } from './_guards';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'annoucements', component: AnnouncementsComponent },
  { path: 'eventRegister', component: EventRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registerWriters', component: RegisterWritersComponent },
  { path: 'eventCreation', component: EventsAnnoucementsCreationComponent },
  { path: 'approveContents', component: ApproveContentComponent },
  { path: 'contentCreation', component: ContentCreationComponent },
  { path: 'sendapproval', component: SendApprovalComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
