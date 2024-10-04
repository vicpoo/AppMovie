import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule], 
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.http.get<any[]>('http://localhost:3000/api/peliculas')
      .subscribe(
        (data) => {
          console.log(data);
          this.movies = data;
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );
  }
}
