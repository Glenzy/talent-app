import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentPageComponent } from './talent-page.component';

describe('TalentPageComponent', () => {
  let component: TalentPageComponent;
  let fixture: ComponentFixture<TalentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
