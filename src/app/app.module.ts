import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import {NewModuleModule} from './new-module/new-module.module'

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    NewModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
