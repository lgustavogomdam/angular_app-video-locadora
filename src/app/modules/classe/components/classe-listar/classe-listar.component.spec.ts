import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseListarComponent } from './classe-listar.component';

describe('ClasseListarComponent', () => {
  let component: ClasseListarComponent;
  let fixture: ComponentFixture<ClasseListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
