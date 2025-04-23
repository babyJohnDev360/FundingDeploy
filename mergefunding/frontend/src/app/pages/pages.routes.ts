import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { AppProductPerformanceComponent } from '../components/product-performance/product-performance.component';

export const PagesRoutes: Routes = [
  {
    path: 'user',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
      ],
    },
  },
  {
    path: '',
    component: AppProductPerformanceComponent,
  },
];
