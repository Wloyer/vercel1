import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesDeuxComponent } from './pages-deux.component';

describe('PagesDeuxComponent', () => {
  let component: PagesDeuxComponent;
  let fixture: ComponentFixture<PagesDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesDeuxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
