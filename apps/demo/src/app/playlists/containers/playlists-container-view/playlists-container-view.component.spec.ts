import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsContainerViewComponent } from './playlists-container-view.component';

describe('PlaylistsContainerViewComponent', () => {
  let component: PlaylistsContainerViewComponent;
  let fixture: ComponentFixture<PlaylistsContainerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsContainerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsContainerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
