import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { GreetComponent } from './components/greet/greet.component';
import { UserDataService } from './services/user-data.service';
import { Users } from './datas/users.model';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreetComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ UserDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
