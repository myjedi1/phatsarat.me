import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { HoverLift } from '../../shared/directives/hover-lift';
import { LetterSpacingHover } from '../../shared/directives/letter-spacing-hover';
import { PortfolioData } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Footer, HoverLift, LetterSpacingHover],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly data = inject(PortfolioData);

  protected readonly socialLinks = this.data.socialLinks;
}
