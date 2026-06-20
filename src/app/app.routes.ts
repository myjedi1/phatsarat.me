import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'DevCurator | Developer Portfolio' },
  { path: 'experience', component: Experience, title: 'ARCHITECT | Experience' },
  { path: 'skills', component: Skills, title: 'ARCHITECT | Skills & Technology' },
  { path: 'contact', component: Contact, title: 'Contact | ARCHITECT' },
  { path: '**', redirectTo: '' },
];
