import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAsideComponent } from './small-aside.component';

describe('SmallAsideComponent', () => {
  let component: SmallAsideComponent;
  let fixture: ComponentFixture<SmallAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallAsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
