import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordLookupComponent } from './word-lookup.component';

describe('WordLookupComponent', () => {
  let component: WordLookupComponent;
  let fixture: ComponentFixture<WordLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
