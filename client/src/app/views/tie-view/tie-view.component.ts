import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-tie-view',
    templateUrl: './tie-view.component.html',
    styleUrls: ['./tie-view.component.css']
})
export class TieViewComponent implements OnInit {

    tie; // TODO: type
    isNew: boolean;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const tieId: string = this.route.snapshot.paramMap.get('id');

        this.isNew = tieId === 'new';

        if (!this.isNew) {
            this.http.get(`${environment.apiServer}/api/ties/${tieId}`)
                .subscribe(
                    (response) => this.tie = response,
                    (error) => console.warn(`get: /api/ties\nerror:`, error)
                );
        }

    }
}
