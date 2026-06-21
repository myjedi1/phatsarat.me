import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Phatsarat.me | Home' },
  { path: 'experience', component: Experience, title: 'Phatsarat.me | Experience' },
  { path: 'skills', component: Skills, title: 'Phatsarat.me | Skills & Technology' },
  { path: 'contact', component: Contact, title: 'Phatsarat.me | Contact' },
  { path: '**', redirectTo: '' },
];
