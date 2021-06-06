import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register.routing';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
    RegisterComponent,
    TechnologyCardComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [RegisterRoutingModule, CommonModule],
    providers: [],
})
export class RegisterModule { }
