export const designBoardInitialData = {
  tickets: {
    'ticket-1': {
      id: 'ticket-1',
      content: 'Cycle App architecture',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
      ],
    },
    'ticket-2': {
      id: 'ticket-2',
      content: 'Implement basic routing',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
        { label: 'High Priority 🔥', type: 'filled', colorScheme: 'orange' },
        {
          label: 'New Features: Implementation of API',
          type: 'filled',
          colorScheme: 'turquoise',
        },
      ],
    },
    'ticket-3': {
      id: 'ticket-3',
      content: 'Configure theme and styling',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
        { label: 'High Priority 🔥', type: 'filled', colorScheme: 'orange' },
        {
          label: 'New Features: Implementation of API',
          type: 'filled',
          colorScheme: 'turquoise',
        },
      ],
    },
    'ticket-4': {
      id: 'ticket-4',
      content: 'Implement sidebar foundations',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
        { label: 'High Priority 🔥', type: 'filled', colorScheme: 'orange' },
      ],
    },
    'ticket-5': {
      id: 'ticket-5',
      content: 'Style and implement granular sidebar functionalities',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
        { label: 'High Priority 🔥', type: 'filled', colorScheme: 'orange' },
        {
          label: 'New Features: Implementation of API',
          type: 'filled',
          colorScheme: 'turquoise',
        },
      ],
    },
    'ticket-6': {
      id: 'ticket-6',
      content: 'implement Sidebar collapse feature',
      tags: null,
    },
    'ticket-7': {
      id: 'ticket-7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: null,
    },
    'ticket-8': {
      id: 'ticket-8',
      content: 'dolor sit amet, consectetur adipiscing elit.',
      tags: null,
    },
    'ticket-9': {
      id: 'ticket-9',
      content: 'sit amet, consectetur adipiscing elit.',
      tags: null,
    },
    'ticket-10': {
      id: 'ticket-10',
      content: 'amet, consectetur adipiscing elit.',
      tags: null,
    },
    'ticket-11': {
      id: 'ticket-11',
      content: 'consectetur adipiscing elit.',
      tags: null,
    },
    'ticket-12': {
      id: 'ticket-12',
      content: 'hendrerit id, blandit at, nisi. Praesent nonummy mi in',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 5', type: 'filled', colorScheme: 'green' },
      ],
    },
    'ticket-13': {
      id: 'ticket-13',
      content: 'porttitor pede justo eu massa. Donec dapibus. Duis at',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
      ],
    },
    'ticket-14': {
      id: 'ticket-14',
      content: '2. Aliquam lorem ante, dapibus in, viverra quis, feugiat',
      tags: [
        { label: '🦋', type: 'outlined' },
        { label: '#CYC-321', type: 'outlined' },
        { label: 'Design', type: 'filled', colorScheme: 'blue' },
        { label: 'Sprint 4', type: 'filled', colorScheme: 'pink' },
        { label: 'High Priority 🔥', type: 'filled', colorScheme: 'orange' },
        {
          label: 'New Features: Implementation of API',
          type: 'filled',
          colorScheme: 'turquoise',
        },
      ],
    },
  },
  columns: {
    'framing-col': {
      id: 'framing-col',
      icon: '📐',
      title: 'Framing',
      ticketIds: [
        'ticket-1',
        'ticket-2',
        'ticket-3',

        'ticket-8',
        'ticket-9',
        'ticket-10',
        'ticket-11',
        'ticket-12',
        'ticket-13',
        'ticket-14',
      ],
    },
    'in-design-col': {
      id: 'in-design-col',
      icon: '🎨',
      title: 'In Design',
      ticketIds: ['ticket-4', 'ticket-5'],
    },
    'in-review-col': {
      id: 'in-review-col',
      icon: '✏️',
      title: 'In Review',
      ticketIds: ['ticket-6'],
    },
    'backlog-col': {
      id: 'backlog-col',
      icon: '⏰',
      title: 'Backlog',
      ticketIds: ['ticket-7'],
    },
  },

  columnOrder: ['framing-col', 'in-design-col', 'in-review-col', 'backlog-col'],
};
