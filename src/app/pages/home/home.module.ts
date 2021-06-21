import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { ProfitComponent } from './components/profit/profit.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BenefitItemComponent } from './components/profit/components/benefit-item/benefit-item.component';
import { ThankfulComponent } from './components/thankful/thankful.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';

const COMPONENTS = [
    HomeComponent,
    ProfitComponent,
    WelcomeComponent
];

@NgModule({
    declarations: [...COMPONENTS, BenefitItemComponent, ThankfulComponent, WoloxersComponent],
    entryComponents: [...COMPONENTS],
    exports: [...COMPONENTS],
    imports: [HomeRoutingModule],
    providers: [],
})
export class HomeModule { }
