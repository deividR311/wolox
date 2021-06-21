import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list.routing';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

const COMPONENTS = [
    ListComponent,
    TechnologyCardComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [ListRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, PipesModule],
    providers: [],
})
export class ListModule { }
