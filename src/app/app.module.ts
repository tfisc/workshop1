import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { VisitPageComponent } from './visit-page/visit-page.component';
import { FormationsComponent } from './formations/formations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
 

const appRoutes: Routes = [
  { path: 'visit', component: VisitPageComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'contacts', component: ContactsComponent },
  { 
    path: '',
   redirectTo: 'homePage',
   pathMatch: 'full'
   },
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent, 
    SidebarComponent,
    VisitPageComponent,
    FormationsComponent,
    ContactsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
