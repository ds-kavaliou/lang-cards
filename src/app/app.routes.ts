import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main'),
    children: [{ path: '', loadComponent: () => import('./pages/main.index') }],
  },
];
