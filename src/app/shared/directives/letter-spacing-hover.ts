import { Directive, signal } from '@angular/core';

/**
 * Expands letter-spacing on hover - used for the emphasized "precise." word
 * on the contact page hero headline.
 *
 * Usage: <span appLetterSpacingHover>precise.</span>
 */
@Directive({
  selector: '[appLetterSpacingHover]',
  host: {
    '[style.letter-spacing]': "expanded() ? '0.1em' : 'normal'",
    '[style.transition]': "'letter-spacing 0.3s ease'",
    '(mouseenter)': 'expanded.set(true)',
    '(mouseleave)': 'expanded.set(false)',
  },
})
export class LetterSpacingHover {
  protected readonly expanded = signal(false);
}
