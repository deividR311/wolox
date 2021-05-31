import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { PagesRoutingModule } from './pages.routing.module';


const MODULES = [
    HomeModule,
    ListModule,
    PagesRoutingModule
];

@NgModule({
    exports: [...MODULES],
    imports: [...MODULES, PipesModule],
    providers: [],
})
export class PagesModule { }
