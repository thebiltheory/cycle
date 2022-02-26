import { LinkProps } from 'react-router-dom';

type TNavigationItemVariantProp = 'main' | 'secondary';

export interface INavigationItemProps extends LinkProps {
  label: string;
  variant?: TNavigationItemVariantProp;
  children?: React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  hideRightElementUntilHover?: boolean;
}
