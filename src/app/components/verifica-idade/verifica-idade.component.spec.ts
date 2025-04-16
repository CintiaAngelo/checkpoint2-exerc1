import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificaIdadeComponent } from './verifica-idade.component';

describe('VerificaIdadeComponent', () => {
  let component: VerificaIdadeComponent;
  let fixture: ComponentFixture<VerificaIdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificaIdadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificaIdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
