import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angular-logo',
  templateUrl: './angular-logo.component.html',
  styleUrls: ['./angular-logo.component.css']
})
export class AngularLogoComponent {
  
  @Input()
  title: string | undefined;

  // Rick Astley Easter Egg
  onLogoClicked() {
    let img = document.getElementById('logo');
    let sound = document.getElementById('sound');
    let spanStatus = document.getElementById('spanStatus');
    let spanWarning = document.getElementById('spanWarning');
    
    if (!sound?.hasAttribute('src')) {
      // Sound setting ON
      sound?.setAttribute('src', './assets/never-gonna-give-you-up.mp3');
      sound?.setAttribute('type', 'audio/mp3');
      (sound as HTMLAudioElement).play();

      // Logo change
      img?.setAttribute('src', './assets/rick-roll-rick-rolled.gif');

      // Span change
      (spanStatus as HTMLElement).innerHTML = "You've been Rick Rolled";
      (spanWarning as HTMLElement).innerHTML = "";
    } else {
      // Sound setting OFF
      sound?.removeAttribute('src');
      sound?.removeAttribute('type');
      (sound as HTMLAudioElement).pause();
      
      // Logo change
      img?.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==');
      
      // Span change
      (spanStatus as HTMLElement).innerHTML = "App is running!";
      (spanWarning as HTMLElement).innerHTML = "Do not click the Angular logo, it might break the application...";
    }

  }
}
