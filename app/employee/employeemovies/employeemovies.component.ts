import { Component, OnInit } from '@angular/core';
import { Movie } from '../../owner/moviemodel/movie';
import { EmployeeService } from '../employeeservice/employee.service';

@Component({
  selector: 'app-employeemovies',
  templateUrl: './employeemovies.component.html',
  styleUrls: ['./employeemovies.component.css']
})
export class EmployeemoviesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  movies:Movie[];
  ngOnInit() {
    this.getMovies();
  }
  getMovies()
  {
    this.employeeService.getMovies().then(response=>this.movies=response);
  }

}
