import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialLink } from '../data/portfolio-data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  readonly socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phatsarat-arjharnsiriwong-504b10301/' },
    { label: 'GitHub', href: 'https://github.com/myjedi1' },
    { label: 'Instragram', href: 'https://www.instagram.com/myjedi.p/' },
  ];
}
