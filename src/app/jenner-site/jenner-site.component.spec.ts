import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JennerSiteComponent } from './jenner-site.component';

describe('JennerSiteComponent', () => {
  let component: JennerSiteComponent;
  let fixture: ComponentFixture<JennerSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JennerSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JennerSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
