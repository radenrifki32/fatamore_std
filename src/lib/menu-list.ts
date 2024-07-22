import {
  Bookmark,
  Folder,
  Footprints,
  HandCoins,
  LayoutGrid,
  LucideIcon,
  MessageSquareMore,
  Settings,
  Users,
} from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Menu',
      menus: [
        {
          href: '/worklist',
          label: 'Work list',
          active: pathname.includes('/worklist'),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: '/roadmap',
          label: 'Roadmap',
          active: pathname.includes('/categories'),
          icon: Footprints,
          submenus: [],
        },
        {
          href: '/finance',
          label: 'Finance',
          active: pathname.includes('/tags'),
          icon: HandCoins,
          submenus: [],
        },
        {
          href: '/collection',
          label: 'Collections',
          active: pathname.includes('/tags'),
          icon: Folder,
          submenus: [],
        },
        {
          href: '/message',
          label: 'Messages',
          active: pathname.includes('/tags'),
          icon: MessageSquareMore,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/account',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
