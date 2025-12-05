import { v4 as uuidv4 } from 'uuid';

export const keys = {
  title: 'title',
  icon: 'icon',
};

export const data = {
  button: {
    search: 'Search',
  },
  columns: [
    {
      id: uuidv4(),
      title: 'Books',
      icon: 'book',
      cards: [
        { id: uuidv4(), title: 'This is Going to Hurt' },
        { id: uuidv4(), title: 'Interpreter of Maladies' },
      ],
    },
    {
      id: uuidv4(),
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: uuidv4(), title: 'Harry Potter' },
        { id: uuidv4(), title: 'Star Wars' },
      ],
    },
    {
      id: uuidv4(),
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: uuidv4(), title: 'The Witcher' },
        { id: uuidv4(), title: 'Skyrim' },
      ],
    },
  ],

  textInput: {
    search: 'Search...',
  },
};
