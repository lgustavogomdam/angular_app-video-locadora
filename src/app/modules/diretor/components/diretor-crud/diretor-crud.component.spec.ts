import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretorCrudComponent } from './diretor-crud.component';

describe('DiretorCrudComponent', () => {
  let component: DiretorCrudComponent;
  let fixture: ComponentFixture<DiretorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretorCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiretorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
