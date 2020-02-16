import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    // MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatGridListModule,
    // MatIconModule,
    MatInputModule,
    MatIconModule,
    // MatListModule,
    // MatNativeDateModule,
    // MatProgressBarModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatTableModule,
    // MatTabsModule,
    // MatSnackBarModule,
    // MatTooltipModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
    ]
})
export class MaterialModule { }
