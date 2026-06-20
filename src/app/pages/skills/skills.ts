import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { PortfolioData } from '../../shared/data/portfolio-data';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Footer, RouterLink, RevealOnScroll],
  templateUrl: './skills.html',
})
export class Skills {
  private readonly data = inject(PortfolioData);

  protected readonly categories = this.data.skillCategories;
}
