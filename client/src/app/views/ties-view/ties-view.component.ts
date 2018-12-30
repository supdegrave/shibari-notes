import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tie } from 'src/app/models/tie';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-ties-view',
    templateUrl: './ties-view.component.html',
    styleUrls: ['./ties-view.component.css']
})
export class TiesViewComponent implements OnInit {

    tiesList: Tie[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get(`${environment.apiServer}/api/ties`)
            .subscribe(
                this.onFetchSuccess,
                this.onFetchError
            );
    }

    onFetchSuccess = (response: ShibariNotes.Tie[]) => {
        this.tiesList = response.map((tie: ShibariNotes.Tie) => new Tie(tie));
        console.log(this.tiesList);
    }

    onFetchError = (error: HttpErrorResponse): void => {
        console.warn(`get: /api/ties\nerror:`, error);
    }

}
