import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public today: string = new Date().toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        });
  public socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/lesetudiantsintermarche', icon: 'logo_facebook.gif' }
  ];

  constructor() {}
}
