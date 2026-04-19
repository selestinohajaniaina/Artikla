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
    {'name': 'Collège', 'link': '/c/College'},
    {'name': 'Lycée', 'link': '/c/Lycée'},
    {'name': 'Articles', 'link': '/c/Articles'},
    {'name': 'Visite', 'link': '/c/Visite'},
    {'name': 'Pensionnat', 'link': '/c/Pensionnat'},
    {'name': 'Village', 'link': '/c/Village'},
    {'name': 'Créer un article', 'link': '/new'},
    {'name': 'Contacter', 'link': '/contact'}
  ];
}
