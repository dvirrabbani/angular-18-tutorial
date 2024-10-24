import { Component } from '@angular/core';
import { HosingLocationComponent } from "../hosing-location/hosing-location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HosingLocationComponent],
  styleUrl: './home.component.scss',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button" >Search</button>
      </form>
    </section>
    <section class="results">
      <app-hosing-location/>
    </section>
  `
})
export class HomeComponent {

}
