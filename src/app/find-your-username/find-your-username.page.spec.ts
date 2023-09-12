import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindYourUsernamePage } from './find-your-username.page';

describe('FindYourUsernamePage', () => {
  let component: FindYourUsernamePage;
  let fixture: ComponentFixture<FindYourUsernamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FindYourUsernamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
