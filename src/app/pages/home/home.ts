import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Footer, RouterLink, RevealOnScroll],
  templateUrl: './home.html',
})
export class Home {
  my_photo:string = './photo/cv_profile_3.JPG';

}
