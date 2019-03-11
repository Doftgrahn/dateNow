import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { ListitemService } from './listitem.service';

@NgModule({
  declarations: [
    AppComponent,
    List1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListitemService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
