import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule], // Agregar CommonModule aquí
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  movies: any[] = [];
  movieForm: FormGroup;
  editMode: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      id: [null],
      nombre: [''],
      calificacion: [null],
      duracion: [null],
      resumen: ['']
    });
  }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.http.get<any[]>('http://localhost:3000/api/peliculas').subscribe(data => {
      this.movies = data;
    });
  }

  onSubmit() {
    const movieData = this.movieForm.value;

    if (this.editMode && movieData.id) {
      this.http.put(`http://localhost:3000/api/peliculas/${movieData.id}`, movieData)
        .subscribe(() => {
          this.fetchMovies();
          this.resetForm();
        });
    } else {
      this.http.post('http://localhost:3000/api/peliculas', movieData)
        .subscribe(() => {
          this.fetchMovies();
          this.resetForm();
        });
    }
  }

  editMovie(movie: any) {
    this.movieForm.patchValue(movie);
    this.editMode = true;
  }

  deleteMovie(id: number) {
    this.http.delete(`http://localhost:3000/api/peliculas/${id}`)
      .subscribe(() => {
        this.fetchMovies();
      });
  }

  resetForm() {
    this.movieForm.reset();
    this.editMode = false;
  }
}
