import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './content-page/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentPageComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
