import { SIZE_TYPES } from '../screenSettings';

const initialState = {
  categories: [
    { id: 'jelly', name: 'Galaretki' },
    { id: 'bars', name: 'Batoniki' },
    { id: 'loli', name: 'Karmel' },

  ],

  screenType: SIZE_TYPES.DESKTOP,

  products: [
    {
      id: 'galaretka-1',
      name: 'Galaretka 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g1.jpg',
    },
    {
      id: 'galaretka-2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Galaretka 2',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g2.jpg',
    },
    {
      id: 'galaretka-3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Galaretka 3',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g3.jpg',
    },
    {
      id: 'galaretka-4',
      name: 'Galaretka 4',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g4.jpg',
    },
    {
      id: 'galaretka-5',
      name: 'Galaretka 5',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g5.jpg',
    },
    {
      id: 'galaretka-6',
      name: 'Galaretka 6',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g6.jpg',
    },
    {
      id: 'galaretka-7',
      name: 'Galaretka  7',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g7.jpg',
    },
    {
      id: 'galaretka-8',
      name: 'Galaretka 8',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g8.jpg',
    },
    {
      id: 'galaretka-9',
      name: 'Galaretka 9',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g9.jpg',
    },
    {
      id: 'galaretka-10',
      name: 'Galaretka 10',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g10.jpg',
    },
    {
      id: 'galaretka-11',
      name: 'Galaretka 11',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g11.jpg',
    },
    {
      id: 'galaretka-12',
      name: 'Galaretka 12',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g12.jpg',
    },
    {
      id: 'galaretka-13',
      name: 'Galaretka 13',
      category: 'jelly',
      price: 30,
      newProduct: true,
      image: '/images/g13.jpg',
    },
    {
      id: 'batonik-1',
      name: 'Batonik 1',
      category: 'bars',
      price: 30,
      newProduct: true,
      image: '/images/b1.jpg',
    },
    {
      id: 'batonik-2',
      name: 'Batonik 2',
      category: 'bars',
      price: 30,
      newProduct: true,
      image: '/images/b2.jpg',
    },
    {
      id: 'batonik-3',
      name: 'Batonik 3',
      category: 'bars',
      price: 30,
      newProduct: true,
      image: '/images/b3.jpg',
    },
    {
      id: 'batonik-4',
      name: 'Batonik 4',
      category: 'bars',
      price: 30,
      newProduct: true,
      image: '/images/b4.jpg',
    },
    {
      id: 'batonik-5',
      name: 'Batonik 5',
      category: 'bars',
      price: 30,
      newProduct: true,
      image: '/images/b5.jpg',
    },
    {
      id: 'batonik-6',
      name: 'Batonik 6',
      category: 'bars',
      price: 30,
      newProduct: true,
      image: '/images/b6.jpg',
    },
    {
      id: 'lizak-1',
      name: 'Lizak 1',
      category: 'loli',
      price: 30,
      newProduct: true,
      image: '/images/l1.jpg',
    },
    {
      id: 'lizak-2',
      name: 'Lizak 2',
      category: 'loli',
      price: 30,
      newProduct: true,
      image: '/images/l2.jpg',
    },
    {
      id: 'lizak-3',
      name: 'Lizak 3',
      category: 'loli',
      price: 30,
      newProduct: true,
      image: '/images/l3.jpg',
    },
    {
      id: 'lizak-4',
      name: 'Lizak 4',
      category: 'loli',
      price: 30,
      newProduct: true,
      image: '/images/l4.jpg',
    },

  ],
  cart: {
    products: {},
    comment: ['Wpisz uwagi do zamówienia'],
  },

};

export default initialState;
