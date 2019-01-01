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
        }
    }

    onFetchSuccess = (response: ShibariNotes.Tie) => {
        this.tie = new Tie(response);
    }

    onFetchError = (error: HttpErrorResponse) => {
        console.warn(`get: /api/ties\nerror:`, error);
    }

    get isEditButtonVisible(): boolean {
        return !this.isContentEditable;
    }

    get isSaveCancelVisible(): boolean {
        return this.isContentEditable && this.tie.isDirty;
    }

    editClick() {
        this.isContentEditable = true;
        // TODO: this should be based on observing model updates
        this.tie.isDirty = true;
    }

    cancelClick() {
        this.isContentEditable = false;
        // TODO: discard changes
    }

    saveClick() {
        this.isContentEditable = false;
        // TODO: save changes
    }
}
