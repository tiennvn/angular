import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCmpComponent } from './new-cmp/new-cmp.component';



@NgModule({
  declarations: [
    NewCmpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewCmpComponent
  ]
})
export class NewModuleModule { }
