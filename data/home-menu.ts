type Menu = {
  name: string;
  url: string;
};

export const mainMenu: Menu[] = [
  {
    name: 'menu:menu.catalog',
    url: '/catalog'
  },
  {
    name: 'menu:menu.whoAreWe',
    url: '/who-are-we'
  },
  {
    name: 'menu:menu.deliveries',
    url: '/deliveries'
  },
  {
    name: 'menu:menu.payments',
    url: '/payments'
  },
  {
    name: 'menu:menu.faqs',
    url: '/faqs'
  }
];
