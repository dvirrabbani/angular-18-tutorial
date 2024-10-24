import { Component, input, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-hosing-location',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exteriror photo of {{housingLocation.photo}}">
      <h2 class="listing-heading">{{housingLocation.city}}, {{housingLocation.state}}</h2>
      <p class="listing-location"></p>
    </section>
  `,
  styleUrl: './hosing-location.component.scss'
})
export class HosingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
