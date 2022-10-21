import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent, NotFound404Component, MovieDetailComponent } from './components';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies/:id', component:MovieDetailComponent},
  {path: '**', pathMatch: 'full', component: NotFound404Component}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
