import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSearchViewContainer } from './album-search-view.container';

describe('AlbumSearchViewContainer', () => {
  let component: AlbumSearchViewContainer;
  let fixture: ComponentFixture<AlbumSearchViewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumSearchViewContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumSearchViewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
