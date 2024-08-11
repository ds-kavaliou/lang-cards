import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DeckCardDeps } from '../components/flip-card';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...DeckCardDeps],
  template: `
    <section>
      <div class="container grid place-items-center">
        <flip-card class="max-w-xs w-full aspect-[5/7] perspective-1600 my-10">
          <flip-card-front class="block size-full shadow rounded bg-stone-50">
            <div class="h-full p-2 grid place-items-center gap-2">
              <div class="uppercase font-semibold tracking-wider">the phrase</div>
              <div class="italic">samples in context</div>
              <button flip-card-trigger>show translation</button>
            </div>
          </flip-card-front>
          <flip-card-back class="grid place-items-center size-full shadow rounded">
            <div class="p-2">
              <div>translation</div>
              <button flip-card-trigger>show original</button>
            </div>
          </flip-card-back>
        </flip-card>
      </div>
    </section>
  `,
})
export default class Page {}
