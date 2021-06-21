import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/sharedComponents/sharedComponents.module';

const COMPONENTS = [
    RegisterComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [RegisterRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedComponentsModule],
    providers: [],
})
export class RegisterModule { }
