import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INITIAL_PLAYLISTS_DATA } from './tokens';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: INITIAL_PLAYLISTS_DATA,
      useValue: [],
    },
  ],
})
export class CoreModule {}
