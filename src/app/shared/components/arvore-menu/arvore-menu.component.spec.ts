import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreMenuComponent } from './arvore-menu.component';

describe('ArvoreMenuComponent', () => {
  let component: ArvoreMenuComponent;
  let fixture: ComponentFixture<ArvoreMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArvoreMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArvoreMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
