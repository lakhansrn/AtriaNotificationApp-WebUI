import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { LoginComponent } from './login/login.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { RegisterWritersComponent } from './announcer/register-writers/register-writers.component';
import { BoardsAnnoucementsCreationComponent } from './announcer/boards-annoucements-creation/boards-annoucements-creation.component';
import { ApproveContentComponent } from './announcer/approve-content/approve-content.component';
import { ContentCreationComponent } from './writer/content-creation/content-creation.component';
import { SendApprovalComponent } from './writer/send-approval/send-approval.component';
import { AuthGuard, RoleGuard } from './_guards';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnnouncerRegistrationComponent } from './registration';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'annoucements', component: AnnouncementsComponent },
  { path: 'eventRegister', component: EventRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'announcerRegistration', component: AnnouncerRegistrationComponent },
  {
    path: 'registerWriters',
    component: RegisterWritersComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'announcer'
    }
  },
  {
    path: 'eventCreation',
    component: BoardsAnnoucementsCreationComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'announcer'
    }
  },
  {
    path: 'approveContents',
    component: ApproveContentComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'announcer'
    }
  },
  { path: 'contentCreation', component: ContentCreationComponent, canActivate: [AuthGuard] },
  { path: 'sendapproval', component: SendApprovalComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
