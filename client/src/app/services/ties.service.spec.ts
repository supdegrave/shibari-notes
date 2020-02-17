import { TestBed } from '@angular/core/testing';

import { TiesService } from './ties.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TiesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        }).compileComponents();
    });

    it('should be created', () => {
        const service: TiesService = TestBed.get(TiesService);
        expect(service).toBeTruthy();
    });
});
