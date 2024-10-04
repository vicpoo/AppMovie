import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  movies = [
    {
      title: 'Transformers',
      rating: '8/10',
      year: 2007,
      duration: '2h 24m',
      imageUrl: 'assets/Transformers.jpeg',
      summary: 'Un joven se encuentra en el centro de una guerra entre dos facciones de robots gigantes.'
    },
    {
      title: 'Avengers: Infinity War',
      rating: '8.4/10',
      year: 2018,
      duration: '2h 29m',
      imageUrl: 'assets/InfinityWars.jpeg',
      summary: 'Los Vengadores luchan contra el titán Thanos para evitar que destruya el universo.'
    },
    {
      title: 'Star Wars: Episodio III - La venganza de los Sith',
      rating: '9.2/10',
      year: 2005,
      duration: '2h :20m',
      imageUrl: 'assets/StarWarsIII.jpeg',
      summary: ''
    },
    {
      title: 'Fabricante de lagrimas',
      rating: '6.8/10',
      year: 2024,
      duration: '1h :45m',
      imageUrl: 'assets/FabricanteDeLagrimas.jpeg',
      summary: ''
    },
    {
      title: 'El castillo ambulante',
      rating: '9.5/10',
      year: 2004,
      duration: '1h :59m',
      imageUrl: 'assets/CastilloBagabundo.jpeg',
      summary: ''
    },
    {
      title: 'Toy Story',
      rating: '8.6/10',
      year: 1995,
      duration: '1h :21m',
      imageUrl: 'assets/ToyStory.jpeg',
      summary: ''
    },
    {
      title: 'The Batman',
      rating: '7.8/10',
      year: 2022,
      duration: '2h :56m',
      imageUrl: 'assets/TheBatman.jpeg',
      summary: ''
    },
    {
      title: 'Lilo y Stitch',
      rating: '7.3/10',
      year: 2002,
      duration: '1h :25m',
      imageUrl: 'assets/LiloYStitch.jpeg',
      summary: ''
    },
    {
      title: 'Yo antes de ti',
      rating: '8.3/10',
      year: 2016,
      duration: '1h :50m',
      imageUrl: 'assets/Yoantesdeti.jpeg',
      summary: ''
    },
  ];
}
