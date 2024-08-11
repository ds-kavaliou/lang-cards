import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="shadow">
      <div class="container h-14 flex items-center">
        <h1>
          <a routerLink="/" class="uppercase tracking-wider text-sm font-medium"
            >lang cards</a
          >
        </h1>
      </div>
    </header>
    <main class="flex-1 py-2">
      <router-outlet />
    </main>
    <footer>
      <div class="container h-10 flex items-center justify-center">
        <div class="text-sm text-center">
          Designed and Developed by
          <a
            href="https://github.com/ds-kavaliou"
            class="underline tracking-wider font-medium hover:no-underline"
            >Dzianis Kavaliou</a
          >
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host {
      @apply flex flex-col min-h-screen;
    }
  `,
})
export default class Layout {}
