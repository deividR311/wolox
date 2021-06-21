import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';

const sharedComponents = []

@NgModule({
  exports: [FormErrorMessageComponent],
  declarations: [
    FormErrorMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedComponentsModule { }
