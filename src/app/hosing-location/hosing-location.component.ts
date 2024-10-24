import { Component, input, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-hosing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exteriror photo of {{housingLocation.photo}}">
      <h2 class="listing-heading">{{housingLocation.city}}, {{housingLocation.state}}</h2>
      <p class="listing-location"></p>
      <a [routerLink]="['/details', housingLocation.id]">Learn more</a>
    </section>
  `,
  styleUrl: './hosing-location.component.scss'
})
export class HosingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
