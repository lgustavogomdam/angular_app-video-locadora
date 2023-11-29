import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseUpdateComponent } from './classe-update.component';

describe('ClasseUpdateComponent', () => {
  let component: ClasseUpdateComponent;
  let fixture: ComponentFixture<ClasseUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
