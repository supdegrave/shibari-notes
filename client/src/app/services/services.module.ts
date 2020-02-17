import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TiesService } from './ties.service';

@NgModule({
    imports: [CommonModule],
    providers: [TiesService],
})
export class ServicesModule {
    constructor(tiesService: TiesService) {
        tiesService.initialize();
    }
}
