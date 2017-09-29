import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StudentComponent} from './studentlist.component'
import {GenderDropDownService} from './gendere-dropdown.service'


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GenderDropDownService],
  bootstrap: [AppComponent,StudentComponent]
})
export class AppModule { }
