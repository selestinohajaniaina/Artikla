import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menus = [
    {'name': 'Actualités', 'link': '/'},
    {'name': 'College', 'link': '/c/college'},
    {'name': 'Lycée', 'link': '/c/lycee'},
    {'name': 'Articles', 'link': '/c/articles'},
    {'name': 'Visite', 'link': '/c/visite'},
    {'name': 'Penssionat', 'link': '/c/pensionat'},
    {'name': 'Village', 'link': '/c/village'},
    {'name': 'Creer un article', 'link': '/new'},
    {'name': 'Contacter', 'link': '/contact'}
  ];
}
