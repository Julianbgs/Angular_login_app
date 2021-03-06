import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from "@angular/forms";
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";
import { ROUTING } from './app.routing';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


