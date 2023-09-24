import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFilterPipe } from './event-filter.pipe';

@NgModule({
    declarations: [
        EventFilterPipe
    ],
    exports: [
        EventFilterPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }