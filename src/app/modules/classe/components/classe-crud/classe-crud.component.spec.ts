import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseCrudComponent } from './classe-crud.component';

describe('ClasseCrudComponent', () => {
  let component: ClasseCrudComponent;
  let fixture: ComponentFixture<ClasseCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasseCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
