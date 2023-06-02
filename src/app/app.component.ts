import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olá mundo!';
  name = 'Matheus';
  
  // Rick Astley Easter Egg
  onLogoClicked() {
    let img = document.getElementById('logo');
    let sound = document.getElementById('sound');
    
    if (!sound?.hasAttribute('src')) {
      sound?.setAttribute('src', './assets/never-gonna-give-you-up.mp3');
      sound?.setAttribute('type', 'audio/mp3');
      (sound as HTMLAudioElement).play();
    } else {
      sound?.removeAttribute('src');
      sound?.removeAttribute('type');
      (sound as HTMLAudioElement).pause();
    }
    
    if (img?.getAttribute('src') == './assets/rick-roll-rick-rolled.gif') {
      img?.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==')
    } else {
      img?.setAttribute('src', './assets/rick-roll-rick-rolled.gif');
    }

  }

  // Key Up Update
  onKeyUp(newName: string) {
    this.name = newName;
  }

}
