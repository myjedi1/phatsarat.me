import {
  Directive,
  ElementRef,
  OnDestroy,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Reveals the host element with a fade + translate-up transition once it
 * scrolls into the viewport. Uses IntersectionObserver and cleans itself
 * up on destroy. Browser-only (guarded via afterNextRender).
 *
 * Usage: <div appRevealOnScroll>...</div>
 *        <div appRevealOnScroll="0.2">...</div>  (custom threshold)
 */
@Directive({
  selector: '[appRevealOnScroll]',
  host: {
    '[style.opacity]': 'visible() ? 1 : 0',
    '[style.transform]': "visible() ? 'translateY(0)' : 'translateY(20px)'",
    '[style.transition]': "'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'",
  },
})
export class RevealOnScroll implements OnDestroy {
  /** Fraction of the element that must be visible before it reveals. */
  threshold = input(0.1, {
    alias: 'appRevealOnScroll',
    transform: (value: number | string | undefined): number => {
      if (value === undefined || value === '') {
        return 0.1;
      }
      const parsed = typeof value === 'number' ? value : Number(value);
      return Number.isFinite(parsed) ? parsed : 0.1;
    },
  });

  protected readonly visible = signal(false);

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer: IntersectionObserver | null = null;

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.visible.set(true);
              this.observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: this.threshold(), rootMargin: '0px 0px -50px 0px' },
      );
      this.observer.observe(el);

      // Match legacy reveal() behavior: anything already on/near screen at
      // load time (e.g. above the fold, or short pages) reveals immediately
      // rather than waiting on a scroll event that may never fire.
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight - 150;
      if (alreadyVisible) {
        this.visible.set(true);
        this.observer.unobserve(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
