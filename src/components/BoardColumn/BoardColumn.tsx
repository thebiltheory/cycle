import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import TicketList from '../TicketList';
import { BoardColumnList } from './BoardColumn.styles';

const BoardColumn: FC<any> = ({ column, tickets, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Stack
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          direction="column"
          bgcolor="#F0F0F0"
          p={1}
          borderRadius={1}
          minWidth={270}
        >
          <Stack direction="row" spacing={1}>
            <Typography>{column.icon}</Typography>
            <Typography>{column.title}</Typography>
          </Stack>

          <Stack overflow="auto">
            <Droppable droppableId={column.id} type="ticket">
              {(provided, { isDraggingOver }) => (
                <BoardColumnList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  border={
                    isDraggingOver
                      ? '2px dashed #999999'
                      : '2px solid transparent'
                  }
                >
                  <TicketList tickets={tickets} />

                  {provided.placeholder}
                </BoardColumnList>
              )}
            </Droppable>
          </Stack>
        </Stack>
      )}
    </Draggable>
  );
};

export default BoardColumn;
