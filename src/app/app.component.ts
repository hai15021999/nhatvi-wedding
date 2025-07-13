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

  private audio = new Audio('assets/audios/le-duong.mp3');
  private boundStartMusic = this.startMusic.bind(this);

  ngOnInit(): void {
    this.audio.loop = true;
    this.audio.volume = 0.5;

    // Wait for user to click anywhere on the page
    document.addEventListener('click', this.boundStartMusic);
    // timer(100).subscribe(() => {
    //   document.getElementById('temp')?.click();
    // });
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.boundStartMusic);
  }

  private startMusic(): void {
    this.audio.play().then(() => {
      console.log('Music started 🎶');
    }).catch(err => {
      console.error('Failed to start music:', err);
    });

    // Remove listener after first interaction
    document.removeEventListener('click', this.boundStartMusic);
  }

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
