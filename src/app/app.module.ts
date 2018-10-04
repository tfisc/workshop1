import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { VisitPageComponent } from './visit-page/visit-page.component';

const appRoutes: Routes = [
  { path: 'visit', component: VisitPageComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'formation', component: HomepageComponent },
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
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule,MatButtonModule, MatCheckboxModule,MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
