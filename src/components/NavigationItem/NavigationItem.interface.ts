type TNavigationItemVariantProp = 'main' | 'secondary';

export interface INavigationItemProps {
  variant?: TNavigationItemVariantProp;
  children?: React.ReactNode;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  hideRightElementUntilHover?: boolean;
  active?: boolean;
}
