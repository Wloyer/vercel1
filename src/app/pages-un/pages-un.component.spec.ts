import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesUnComponent } from './pages-un.component';

describe('PagesUnComponent', () => {
  let component: PagesUnComponent;
  let fixture: ComponentFixture<PagesUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesUnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
