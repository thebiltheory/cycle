import { designBoardInitialData } from './board-initial-data';

interface IBoard {
  id: string;
  name: string;
  icon: string;
  slug: string;
  starred: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
  section: any;
  data: any;
}

export const boards: IBoard[] = [
  {
    id: 'board-1',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '🦊',
    name: 'Feedback 2.0',
    slug: 'feedback-2-0',
    description: 'Gathering feedback for version 2.0',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
  {
    id: 'board-2',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '🏆',
    name: 'Roadmap tech',
    slug: 'roadmap-tech',
    description: 'Roadmap for tech',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
  {
    id: 'design-board',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '🎨',
    name: 'Design',
    slug: 'design',
    description: 'Design board',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
  {
    id: 'board-4',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '🤖',
    name: 'Github feedback',
    slug: 'github-feedback',
    description: 'Gathering feedback from Github',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
  {
    id: 'board-5',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '⚛️',
    name: 'Improvements',
    slug: 'improvements',
    description: 'Improvements board',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
  {
    id: 'board-6',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '🐞',
    name: 'Bugs',
    slug: 'bugs',
    description: 'Hungry for bugs?',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
  {
    id: 'board-7',
    section: {
      id: 1,
      name: 'Boards',
    },
    icon: '🚀',
    name: 'Sprint 4',
    slug: 'sprint-4',
    description: 'Sprint 4',
    starred: true,
    createdAt: '2019-01-01T00:00:00.000Z',
    updatedAt: '2019-01-01T00:00:00.000Z',
    data: designBoardInitialData,
  },
];

export function getBoardById(id: string | undefined): IBoard {
  return boards.find((board) => board.id === id)!;
}

export function getBoardByPathname(pathname: string): IBoard {
  return boards.find((board) => pathname.endsWith(board.id))!;
}
