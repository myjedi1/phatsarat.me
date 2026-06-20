import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { PortfolioData } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Footer, RevealOnScroll],
  templateUrl: './experience.html',
})
export class Experience {
  private readonly data = inject(PortfolioData);

  protected readonly entries = this.data.experience;
}
