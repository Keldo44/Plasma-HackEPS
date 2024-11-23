import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisPokesPage } from './mis-pokes.page';

describe('MisPokesPage', () => {
  let component: MisPokesPage;
  let fixture: ComponentFixture<MisPokesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPokesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
