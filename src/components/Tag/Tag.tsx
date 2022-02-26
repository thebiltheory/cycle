import { FC, useRef, useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { TagBase } from './Tag.styles';

const Tag: FC<any> = ({ type = 'outlined', label, colorScheme }) => {
  // I wouldn't recommend use a lot of refs
  // But I am going to use it here to implement a conditional
  // tooltip ellipsis for the label
  const ref = useRef<any>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (ref?.current?.offsetWidth >= 119) {
      setShowTooltip(true);
    }
  }, []);

  if (showTooltip) {
    return (
      <Tooltip title={label} placement="top">
        <TagBase
          ref={ref}
          label={label}
          colorScheme={colorScheme}
          variant={type}
        />
      </Tooltip>
    );
  }

  return (
    <TagBase ref={ref} label={label} colorScheme={colorScheme} variant={type} />
  );
};

export default Tag;
