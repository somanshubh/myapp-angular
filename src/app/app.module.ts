import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavComponent,
    FooterComponent,
    Page2Component,
    AboutComponent,
    ContactComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'page', component: PageComponent},
      {path: '', redirectTo: '/page', pathMatch: 'full'},
      {path: 'page2',component: Page2Component},
      {path: 'about',component: AboutComponent},
      {path: 'contact',component: ContactComponent},
      {path: 'privacy',component: PrivacyComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
