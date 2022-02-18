import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './subfiles/home.component';
import { ContainComponent } from './subfiles/contain.component';
import { AdvancedComponent } from './subfiles/advanced.component';
import { BasicComponent } from './subfiles/basic.component';
import { NotFoundComponent } from './subfiles/notFound.component';
const animationRoutes: Routes = [ 
  { 
    path: 'animation-home', 
    component: HomeComponent 
  }, 
  { 
    path: 'animation-basics', 
    component: BasicComponent 
  }, 
  { 
    path: 'animation-contained', 
    component: ContainComponent 
  }, 
  { 
    path: 'animation-advanced', 
    component: AdvancedComponent 
  }, 
  { 
    path: '', 
    redirectTo: '/animation-home', 
    pathMatch: 'full' 
  },{
    path: '**', 
    component:NotFoundComponent
  } 
];



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
