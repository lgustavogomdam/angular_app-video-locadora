import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloListarComponent } from './titulo-listar.component';

describe('TituloListarComponent', () => {
  let component: TituloListarComponent;
  let fixture: ComponentFixture<TituloListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
