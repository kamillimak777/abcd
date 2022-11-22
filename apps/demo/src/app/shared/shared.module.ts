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
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenteditableDirective } from './directives/contenteditable.directive';

@NgModule({
  declarations: [ClockComponent, NavigationComponent, ContenteditableDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    MatCardModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ClockComponent,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    NavigationComponent,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ContenteditableDirective,
    MatCardModule,
  ],
})
export class SharedModule {}
