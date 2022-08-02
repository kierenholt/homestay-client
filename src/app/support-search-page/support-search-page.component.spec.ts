import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportSearchPageComponent } from './support-search-page.component';

describe('SupportSearchPageComponent', () => {
  let component: SupportSearchPageComponent;
  let fixture: ComponentFixture<SupportSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportSearchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
