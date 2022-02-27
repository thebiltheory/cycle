import { Box, Checkbox, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ActionMenu from '../ActionMenu';
import Tag from '../Tag';
import { TicketBase } from './Ticket.styles';

const Ticket: FC<any> = ({ ticket, index }) => {
  const [showActions, setShowActions] = useState(false);

  const onMouseEnter = () => {
    setShowActions(true);
  };

  const onMouseLeave = () => {
    setShowActions(false);
  };

  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(provided, { isDragging }) => (
        <TicketBase
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          elevation={isDragging ? 3 : 1}
          sx={{ p: 1, position: 'relative' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {showActions && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              position="absolute"
              width="100%"
              top={8}
              left={0}
              px={1}
            >
              <Checkbox
                disableRipple
                size="small"
                sx={{
                  padding: 0,
                  left: -18,
                  borderRadius: '4px',
                  color: '#C4C4C4',
                  '&.Mui-checked': {
                    color: '#C4C4C4',
                  },
                }}
              />
              <ActionMenu variant="dark" />
            </Stack>
          )}
          <Box pr={2}>{ticket.content}</Box>
          {ticket.tags && (
            <Box
              component="div"
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
            >
              {ticket.tags.map((tag: any, index: number) => {
                // index is not a good practice in production
                // To due potential failure of react reconciler
                return (
                  <Tag
                    key={`${tag.label}-${index}`}
                    label={tag.label}
                    colorScheme={tag.colorScheme}
                    type={tag.type}
                  />
                );
              })}
            </Box>
          )}
        </TicketBase>
      )}
    </Draggable>
  );
};

export default Ticket;
