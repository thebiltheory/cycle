import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BoardColumn from '../components/BoardColumn';
import { getBoardById } from '../mocks/boards';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Box, Container, Stack, Typography } from '@mui/material';

function Board() {
  const { id } = useParams();
  const { data, name, icon } = getBoardById(id);

  const [boardData, setBoardData] = useState<any>(data);
  const [isDragging, setIsDragging] = useState(false);

  const onDragEnd = (result: DropResult) => {
    setIsDragging(false);
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(boardData.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newBoardData = {
        ...boardData,
        columnOrder: newColumnOrder,
      };

      setBoardData(newBoardData);
    }

    const start = boardData.columns[source.droppableId];
    const finish = boardData.columns[destination.droppableId];
    const newTicketIds = Array.from(start.ticketIds);

    if (start === finish) {
      newTicketIds.splice(source.index, 1);
      newTicketIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        ticketIds: newTicketIds,
      };

      const newBoardData = {
        ...boardData,
        columns: {
          ...boardData.columns,
          [newColumn.id]: newColumn,
        },
      };

      // Should call an API to percist the board
      setBoardData(newBoardData);
      return;
    }

    // Moving from one column to another
    const startTicketIds = Array.from(start.ticketIds);
    startTicketIds.splice(source.index, 1);
    const newStart = {
      ...start,
      ticketIds: startTicketIds,
    };

    const finishTicketIds = Array.from(finish.ticketIds);
    finishTicketIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      ticketIds: finishTicketIds,
    };

    const newBoardData = {
      ...boardData,
      columns: {
        ...boardData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setBoardData(newBoardData);
  };

  const onDragStart = () => {
    setIsDragging(true);
  };

  return (
    <Stack height="100vh" py={2} overflow="hidden" spacing={2}>
      <Stack direction="row" spacing={2} px={4} alignItems="center">
        <Typography>{icon}</Typography>
        <Typography component="h1" fontWeight="bold" fontSize={24}>
          {name}
        </Typography>
      </Stack>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-board-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Stack
              direction="row"
              spacing={2}
              {...provided.droppableProps}
              ref={provided.innerRef}
              overflow="auto"
              px={4}
              height="100%"
            >
              {boardData.columnOrder.map((columnId: string, index: number) => {
                const column = boardData.columns[columnId];
                const tickets = column.ticketIds.map(
                  (ticketId: string) => boardData.tickets[ticketId],
                );
                return (
                  <BoardColumn
                    key={column.id}
                    column={column}
                    tickets={tickets}
                    isDragging={isDragging}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </Stack>
  );
}

export default Board;
