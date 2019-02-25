import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tie } from 'src/app/models/tie';
import { environment } from 'src/environments/environment';
import { TiesService } from 'src/app/services/ties.service';

@Component({
    selector: 'app-tie-view',
    templateUrl: './tie-view.component.html',
    styleUrls: ['./tie-view.component.scss']
})
export class TieViewComponent implements OnInit {

    tie: Tie;
    isNew: boolean;
    tieUri: string;

    // template interaction properties
    isContentEditable: boolean;

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private tiesService: TiesService
    ) {
        this.isContentEditable = false;
    }

    onHttpError = (error: HttpErrorResponse) => {
        console.error(error);
    }

    ngOnInit() {
        const tieId: string = this.route.snapshot.paramMap.get('id');

        this.isNew = tieId === 'new';
        this.tieUri = `${environment.apiServer}/api/ties/${tieId}`;

        if (!this.isNew) {
            this.tie = this.tiesService.getTieById(tieId);
        } else {
            // TODO: initialize tie
            this.isContentEditable = true;
        }
    }

    navigateToTiesFilteredBy(property: string): void {
        const filterBy: any = {};
        filterBy[property] = this.tie[property];
        this.router.navigate(['/ties', filterBy]);
    }

    editClick() {
        this.isContentEditable = true;
    }

    cancelClick() {
        this.isContentEditable = false;
        this.tie.discardChanges();
        console.warn('TODO: what should this do in case of ties/new');
    }

    saveClick() {
        this.isContentEditable = false;

        this.http.put(this.tieUri, this.tie)
            .subscribe(
                (response: ShibariNotes.Tie) => {
                    console.log(`saved ${response.name}`);
                },
                this.onHttpError
            );
    }

    updateTie(property: string, event): void {
        try {
            this.tie[property] = event.target.innerText;
        } catch (error) {
            console.log(`Attempted to set missing property [${property}]`, error);
        }
    }
}
