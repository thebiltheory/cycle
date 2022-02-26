import { FC, useRef, useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { TagBase } from './Tag.styles';

const Tag: FC<any> = ({ type = 'outlined', label, colorScheme }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (label.length >= 16) {
      setShowTooltip(true);
    }
  }, [label]);

  if (showTooltip) {
    return (
      <Tooltip title={label} placement="top">
        <TagBase label={label} colorScheme={colorScheme} variant={type} />
      </Tooltip>
    );
  }

  return <TagBase label={label} colorScheme={colorScheme} variant={type} />;
};

export default Tag;
