import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAccessControlServiceComponent } from './auth-access-control-service.component';

describe('AuthAccessControlServiceComponent', () => {
  let component: AuthAccessControlServiceComponent;
  let fixture: ComponentFixture<AuthAccessControlServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthAccessControlServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAccessControlServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
