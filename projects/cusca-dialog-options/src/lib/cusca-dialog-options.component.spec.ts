import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscaDialogOptionsComponent } from './cusca-dialog-options.component';

describe('CuscaDialogOptionsComponent', () => {
  let component: CuscaDialogOptionsComponent;
  let fixture: ComponentFixture<CuscaDialogOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuscaDialogOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuscaDialogOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
