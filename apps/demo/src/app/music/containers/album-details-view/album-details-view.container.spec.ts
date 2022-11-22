import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsViewContainer } from './album-details-view.container';

describe('AlbumDetailsViewContainer', () => {
  let component: AlbumDetailsViewContainer;
  let fixture: ComponentFixture<AlbumDetailsViewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDetailsViewContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailsViewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
