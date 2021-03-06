import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CarService } from './car.service'

@Component({
  moduleId: module.id,
  selector: 'app-car',
  templateUrl: 'car.component.html',
  styleUrls: ['car.component.css'],
  providers: [CarService]
})

export class CarComponent implements OnInit {
  cars: any;

  constructor(public http: Http,
              public router: Router,
              private carService: CarService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.carService
        .getCars()
        .subscribe(response => this.cars = response.json());
  }

  edit(id: number) {
    this.router.navigate(['/edit-car/' + id])
  }

  delete(id: number) {
    this.carService.delete(id).subscribe(response => this.load());
  }

  goToNew() {
    this.router.navigate(['/new-car'])
  }
}
