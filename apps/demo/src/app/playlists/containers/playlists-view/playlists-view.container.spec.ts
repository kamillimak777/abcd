import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsViewContainer } from './playlists-view.container';

describe('PlaylistsViewContainer', () => {
  let component: PlaylistsViewContainer;
  let fixture: ComponentFixture<PlaylistsViewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsViewContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsViewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
