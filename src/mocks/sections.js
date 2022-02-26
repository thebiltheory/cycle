import { boards } from './boards';

export const sections = [
  {
    id: 'SEC-1',
    name: 'Starred',
    boards: boards.map((board) => {
      if (board.starred) {
        return board;
      }
    }),
  },
  {
    id: 'SEC-2',
    name: 'Boards',
    boards,
  },
];
