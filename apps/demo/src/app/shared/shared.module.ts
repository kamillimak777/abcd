import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';

import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, MatListModule],
  exports: [ClockComponent, MatListModule],
})
export class SharedModule {}
