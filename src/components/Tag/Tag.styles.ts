import { Chip } from '@mui/material';
import { styled } from '@mui/system';

const variants = {
  filled: {},
  outlined: {},
};

const colorSchemes: any = {
  blue: {
    color: '#102DEA',
    bg: '#E2E6FD',
  },
  pink: {
    color: '#CC10EA',
    bg: '#FDE2FF',
  },
  green: {
    color: '#0FD267',
    bg: '#DFFCED',
  },
  orange: {
    color: '#EA9E10',
    bg: '#FDF3E2',
  },
  turquoise: {
    color: '#489FBE',
    bg: '#E9F5F9',
  },
};

export const TagBase = styled<any>(Chip)`
  margin-right: 4px;
  margin-bottom: 4px;

  .MuiChip-label {
    padding: 2px 4px;
    max-width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ colorScheme }) => {
    if (colorScheme) {
      return `
        color: ${colorSchemes[colorScheme].color};
        background-color: ${colorSchemes[colorScheme].bg};
    `;
    }
  }}
`;
TagBase.defaultProps = { sx: { borderRadius: '4px' } };
