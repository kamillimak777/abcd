import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  time = '';

  constructor(
    private app: ApplicationRef,
    private zone: NgZone, // zone.js
    private cdr: ChangeDetectorRef
  ) {
    this.cdr.detach();
  }

  updateTime() {
    this.time = new Date().toLocaleTimeString();
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    // this.cdr.markForCheck();

    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.updateTime();
        this.cdr.detectChanges();
        // this.cdr.markForCheck();
      }, 1_000);
    });
  }
}
