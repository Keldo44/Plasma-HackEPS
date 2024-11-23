import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoCapturatPage } from './no-capturat.page';

describe('NoCapturatPage', () => {
  let component: NoCapturatPage;
  let fixture: ComponentFixture<NoCapturatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCapturatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
