import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  styleUrl: './app.component.scss',
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
        <!-- decorative image -->
        <img src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      </a>
      <section class="content">
           <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'homes';
}
