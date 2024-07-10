import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostModalComponent } from './delete-post-modal.component';

describe('DeletePostModalComponent', () => {
  let component: DeletePostModalComponent;
  let fixture: ComponentFixture<DeletePostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePostModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
