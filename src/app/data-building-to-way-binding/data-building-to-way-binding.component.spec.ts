import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBuildingToWayBindingComponent } from './data-building-to-way-binding.component';

describe('DataBuildingToWayBindingComponent', () => {
  let component: DataBuildingToWayBindingComponent;
  let fixture: ComponentFixture<DataBuildingToWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBuildingToWayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBuildingToWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
