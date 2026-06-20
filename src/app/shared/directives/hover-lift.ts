import { Directive, signal } from '@angular/core';

/**
 * Applies a subtle "lift" (translateY) on hover, matching the original
 * vanilla-JS bento-card micro-interaction. Pure CSS-driven via host
 * bindings - no manual DOM listeners needed.
 *
 * Usage: <div appHoverLift>...</div>
 */
@Directive({
  selector: '[appHoverLift]',
  host: {
    '[style.transform]': "hovered() ? 'translateY(-2px)' : 'translateY(0)'",
    '[style.transition]': "'transform 0.2s ease-out, border-color 0.2s ease-out'",
    '(mouseenter)': 'hovered.set(true)',
    '(mouseleave)': 'hovered.set(false)',
  },
})
export class HoverLift {
  protected readonly hovered = signal(false);
}
