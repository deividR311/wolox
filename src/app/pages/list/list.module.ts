import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list.routing';
import { TechnologyCardComponent } from './components/technology-card/technology-card.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
    ListComponent,
    TechnologyCardComponent
];

@NgModule({
    declarations: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [ListRoutingModule, CommonModule],
    providers: [],
})
export class ListModule { }
