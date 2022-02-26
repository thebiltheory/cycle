import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TicketBase } from './Ticket.styles';

const Ticket: FC<any> = ({ ticket, index }) => {
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
        </TicketBase>
      )}
    </Draggable>
  );
};

export default Ticket;
