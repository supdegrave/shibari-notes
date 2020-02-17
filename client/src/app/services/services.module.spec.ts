import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicesModule } from './services.module';
import { TiesService } from './ties.service';

describe('ServicesModule', () => {
    let servicesModule: ServicesModule;
    let tiesService: TiesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        }).compileComponents();

        tiesService = TestBed.get(TiesService);
        servicesModule = new ServicesModule(tiesService);
    });

    it('should create an instance', () => {
        expect(servicesModule).toBeTruthy();
    });
});
