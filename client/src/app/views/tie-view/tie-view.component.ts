import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tie } from 'src/app/models/tie';

@Component({
    selector: 'app-tie-view',
    templateUrl: './tie-view.component.html',
    styleUrls: ['./tie-view.component.scss']
})
export class TieViewComponent implements OnInit {

    tie: Tie;
    isNew: boolean;

    // template interaction properties
    isContentEditable: boolean;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) {
        this.isContentEditable = false;
    }

    ngOnInit() {
        const tieId: string = this.route.snapshot.paramMap.get('id');

        this.isNew = tieId === 'new';

        if (!this.isNew) {
            this.http.get(`${environment.apiServer}/api/ties/${tieId}`)
                .subscribe(
                    this.onFetchSuccess,
                    this.onFetchError
                );
        } else {
            this.isContentEditable = true;
        }
    }

    onFetchSuccess = (response: ShibariNotes.Tie) => {
        this.tie = new Tie(response);
    }

    onFetchError = (error: HttpErrorResponse) => {
        console.warn(`get: /api/ties\nerror:`, error);
    }

    editClick() {
        this.isContentEditable = true;

        // console.warn('TODO: remove - only for development');
        // this.tie.name = 'fnord';
    }

    cancelClick() {
        this.isContentEditable = false;
        this.tie.discardChanges();
        console.warn('TODO: what should this do in case of ties/new');
    }

    saveClick() {
        this.isContentEditable = false;
        console.warn('TODO: save changes');
    }

    updateTie(property: string, event): void {
        try {
            this.tie[property] = event.target.innerText;
        } catch (error) {
            console.log(`Attempted to set missing property [${property}]`, error);
        }
    }
}
