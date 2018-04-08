import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSelfProviderComponent } from './parent-self-provider.component';

describe('ParentSelfProviderComponent', () => {
  let component: ParentSelfProviderComponent;
  let fixture: ComponentFixture<ParentSelfProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSelfProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSelfProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
