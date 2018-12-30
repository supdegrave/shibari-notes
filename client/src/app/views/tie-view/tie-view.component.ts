import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tie } from 'src/app/models/tie';

@Component({
    selector: 'app-tie-view',
    templateUrl: './tie-view.component.html',
    styleUrls: ['./tie-view.component.css']
})
export class TieViewComponent implements OnInit {

    tie: Tie;
    isNew: boolean;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const tieId: string = this.route.snapshot.paramMap.get('id');

        this.isNew = tieId === 'new';

        if (!this.isNew) {
            this.http.get(`${environment.apiServer}/api/ties4567/${tieId}`)
                .subscribe(
                    this.onFetchSuccess,
                    this.onFetchError
                );
        }
    }

    onFetchSuccess = (response: ShibariNotes.Tie) => {
        this.tie = new Tie(response);
    }

    onFetchError = (error: HttpErrorResponse) => {
        console.warn(`get: /api/ties\nerror:`, error);
    }
}
