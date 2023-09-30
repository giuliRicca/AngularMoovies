import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import {CarouselModule} from 'primeng/carousel';
import { SharedModule } from 'src/app/shared/shared.module';

import { 
  NavbarComponent, 
  HomeComponent, 
  NotFound404Component,
  MovieListComponent, 
  MovieDetailComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFound404Component,
    MovieListComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUTg-6DbmxWtTnZ9e5tqNTy74wF8pHWbc'
    }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    MovieListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
