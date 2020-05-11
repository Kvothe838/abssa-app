import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAccessDialogComponent } from './clients-access-dialog.component';

describe('ClientsAccessDialogComponent', () => {
  let component: ClientsAccessDialogComponent;
  let fixture: ComponentFixture<ClientsAccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsAccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsAccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
