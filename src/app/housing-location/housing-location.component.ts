import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-housing-location',
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
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
