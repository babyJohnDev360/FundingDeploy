import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'User List',
    iconName: 'list-details',
    route: '/home',
  },
  {
    displayName: 'Fund',
    iconName: 'list-details',
    route: '/home/fund',
  },
  {
    displayName: 'Servicw',
    iconName: 'list-details',
    route: '/home/service',
  }
  
];
