import styled from '@emotion/styled';

const DropdownButton = styled('button')`
  font-weight: bold;
  font-size: 0.875rem;
  padding: 8px;
  border-radius: 4px;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #242424;
  }
`;

export default DropdownButton;
