import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

@Component({
  selector: 'phrase-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  template: `
    <div
      class="h-full p-2 shadow rounded-lg grid *:col-[1/-1] *:row-[1/-1] transform-style-3d duration-500 will-change-transform"
      [ngClass]="{ 'rotate-y-180': state() }"
    >
      <div class="backface-hidden">
        <div>card 1</div>
        <button (click)="flip()">flip card</button>
      </div>
      <div class="backface-hidden rotate-y-180">
        <div>card 2</div>
        <button (click)="flip()">flip card</button>
      </div>
    </div>
  `,
})
export class PhraseCardComponent {
  public state = signal<boolean>(true);

  public flip() {
    this.state.update((prev) => !prev);
  }
}
