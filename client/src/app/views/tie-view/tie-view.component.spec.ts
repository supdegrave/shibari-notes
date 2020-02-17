import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from 'src/app/material/material.module';
import { TieViewComponent } from './tie-view.component';
import { Tie } from 'src/app/models/tie';

const mockTie: ShibariNotes.Tie = {
    'tags': [],
    '_id': '9999999999999999999999',
    'name': 'name',
    'description': 'description',
    'teacher': 'teacher',
    'style': 'style',
    'learningContext': 'learningContext',
    'created': '2020-02-14T23:13:51.315Z',
};

describe('TieViewComponent', () => {
    let component: TieViewComponent;
    let fixture: ComponentFixture<TieViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                MarkdownModule.forRoot(),
                MaterialModule,
            ],
            declarations: [TieViewComponent],
        }).compileComponents();
    }));

    function initView(isNew?: boolean) {
        const tie = !isNew ? mockTie : undefined;
        component.tie = new Tie(tie);
        fixture.detectChanges();
        console.log(component.tie);
    }

    beforeEach(() => {
        fixture = TestBed.createComponent(TieViewComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        initView();
        expect(component).toBeTruthy();
    });

    it('should enter edit mode', () => {
        initView();
        component.editClick();
        expect(component.isContentEditable).toBeTruthy();
    });

    it('should cancel edit mode', () => {
        initView();
        component.editClick();
        expect(component.isContentEditable).toBeTruthy();
        component.cancelClick();
        expect(component.isContentEditable).toBeFalsy();
    });

    it('should discard changes on cancel', () => {
        initView();
        const cachedTie: Tie = component.tie;
        component.tie.name = `I'm a dirty dirty tie`;
        expect(component.tie.isDirty).toBeTruthy();
        component.cancelClick();
        expect(component.tie.isDirty).toBeFalsy();
        expect(component.tie.name).toEqual(cachedTie.name);
    });

    it('should update tie', () => {
        initView();
        const newName = 'new name';
        component.updateTie('name', { target: { innerText: newName} });
        expect(component.tie.isDirty).toBeTruthy();
        expect(component.tie.name).toEqual(newName);
    });

    it('should create new', () => {
        const isNew = true;
        initView(isNew);
        expect(component.tie.id).toBeFalsy();
        expect(component.tie.name).toBeFalsy();
        expect(component.tie.description).toBeFalsy();
    });

    // it('should ', () => {
    //     initView();
    //     expect(component)
    // });

    // navigateToTiesFilteredBy(property: string): void
    // deleteClick()
    // saveClick()
});
