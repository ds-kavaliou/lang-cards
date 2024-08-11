import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhraseCardComponent } from '../card.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PhraseCardComponent],
  template: `
    <section>
      <div class="container grid place-items-center">
        <phrase-card class="max-w-xs w-full aspect-[5/7] perspective-1000" />
      </div>
    </section>
  `,
})
export default class Page {}
