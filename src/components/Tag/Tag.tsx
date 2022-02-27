import { Tooltip } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { TagBase } from './Tag.styles';

const Tag: FC<any> = ({ type = 'outlined', label, colorScheme }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (label.length >= 17) {
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
