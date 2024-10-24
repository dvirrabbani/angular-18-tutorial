import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  styleUrl: './home.component.scss',
  template: `
    <section>
      <form formGroup>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
     <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = [];
  filterForm!: FormGroup
  constructor(private fb: FormBuilder) {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });

    this.filterForm = this.fb.group({
      text: ''
    })
  }

  filterResults(text: string) {
    if (!text) { // when input text is cleared retrive the initial housing location data
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
