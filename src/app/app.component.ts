import { Component, HostListener } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CalendarComponent
  ]
})
export class AppComponent {
  title = 'nhatvi-wedding';

  animated = false;

  toggleAnimation() {
    this.animated = !this.animated;
  }

  // if croll to element with id 'wedding-images', toggle animation
  @HostListener('window:scroll')
  onScroll() {
    if (!this.animated) {
      this.checkIfInViewport();
    }
  }
  

  // if element with id 'wedding-images' is in viewport, toggle animation
  checkIfInViewport() {
    const element = document.getElementById('wedding-images');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        this.animated = true;
      } else {
        this.animated = false;
      }
    }
  }
}
