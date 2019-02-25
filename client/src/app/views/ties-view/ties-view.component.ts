import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiesService } from 'src/app/services/ties.service';

@Component({
    selector: 'app-ties-view',
    templateUrl: './ties-view.component.html',
    styleUrls: ['./ties-view.component.scss']
})
export class TiesViewComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        public tiesService: TiesService
    ) { }

    ngOnInit() {
        const paramMap = this.route.snapshot.paramMap;

        if (paramMap.keys.length === 1) {
            const filterKey = paramMap.keys[0];
            const filterValue = paramMap.get(filterKey);
            this.tiesService.addFilter(filterKey, filterValue);
        }
    }

}
