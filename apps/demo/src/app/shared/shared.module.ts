import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './components/clock/clock.component';

import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClockComponent, NavigationComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  exports: [
    FormsModule,
    ClockComponent,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    NavigationComponent,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class SharedModule {}
