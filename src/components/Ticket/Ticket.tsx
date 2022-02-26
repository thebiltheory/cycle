import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Tag from '../Tag';
import { TicketBase } from './Ticket.styles';

const Ticket: FC<any> = ({ ticket, index }) => {
  console.log(ticket.tags);

  return (
    <Draggable draggableId={ticket.id} index={index}>
      {(provided, { isDragging }) => (
        <TicketBase
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          elevation={isDragging ? 3 : 1}
          sx={{ p: 1 }}
        >
          {ticket.content}
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
