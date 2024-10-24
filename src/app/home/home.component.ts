import { Component, inject } from '@angular/core';
import { HosingLocationComponent } from "../hosing-location/hosing-location.component";
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HosingLocationComponent],
  styleUrl: './home.component.scss',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button" >Search</button>
      </form>
    </section>
    <section class="results">
      <app-hosing-location *ngFor="let housingLocation of housingLocationList"  [housingLocation]="housingLocation"/>
    </section>
  `
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = []
  housingSerivce: HousingService = inject(HousingService)
  constructor() {
    this.housingLocationList = this.housingSerivce.getAllHousingList()
  }
}
