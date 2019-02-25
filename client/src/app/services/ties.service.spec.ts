import { TestBed } from '@angular/core/testing';

import { TiesService } from './ties.service';

describe('TiesService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TiesService = TestBed.get(TiesService);
        expect(service).toBeTruthy();
    });
});
