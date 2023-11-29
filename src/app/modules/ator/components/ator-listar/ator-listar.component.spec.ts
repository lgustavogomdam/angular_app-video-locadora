import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtorListarComponent } from './ator-listar.component';

describe('AtorListarComponent', () => {
  let component: AtorListarComponent;
  let fixture: ComponentFixture<AtorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtorListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
