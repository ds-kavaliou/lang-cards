import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Directive, HostListener, signal } from '@angular/core';

@Component({
  selector: 'flip-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  template: `
    <div class="h-full grid *:col-[1/-1] *:row-[1/-1] transform-style-3d duration-500 will-change-transform" [ngClass]="{ 'rotate-y-180': side() }">
      <div class="backface-hidden">
        <ng-content select="flip-card-front" />
      </div>
      <div class="backface-hidden rotate-y-180">
        <ng-content select="flip-card-back" />
      </div>
    </div>
  `,
})
export class FlipCardComponent {
  public side = signal<boolean>(false);

  public flip() {
    this.side.update((prev) => !prev);
  }
}

@Component({
  selector: 'flip-card-front, flip-card-back',
  standalone: true,
  template: `<ng-content />`,
})
export class FlipCardSideComponent {}

@Directive({
  selector: '[flip-card-trigger]',
  standalone: true,
})
export class FlipCardTriggerDirective {
  constructor(private deck: FlipCardComponent) {}

  @HostListener('click')
  onClick() {
    this.deck.flip();
  }
}

export const DeckCardDeps = [FlipCardComponent, FlipCardSideComponent, FlipCardTriggerDirective];
