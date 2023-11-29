import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorListarComponent } from './diretor-listar.component';

describe('DiretorListarComponent', () => {
  let component: DiretorListarComponent;
  let fixture: ComponentFixture<DiretorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretorListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
