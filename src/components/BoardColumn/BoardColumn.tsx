import { Box, Button, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { BiCaretDown, BiCaretRight } from 'react-icons/bi';
import TicketList from '../TicketList';
import { BoardColumnList } from './BoardColumn.styles';

const BoardColumn: FC<any> = ({ column, tickets, index }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onExpandColumn = () => {
    setIsCollapsed(!isCollapsed);
  };

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
          borderRadius={2}
          width={isCollapsed ? 33 : '270px'}
          height={isCollapsed ? '100%' : 'auto'}
          // sx={{
          //   willChange: 'width',
          //   transition: 'width 0.2s ease-in-out',
          // }}
          {...(!isCollapsed && {
            minWidth: 270,
          })}
        >
          <Stack
            direction={isCollapsed ? 'row-reverse' : 'row'}
            spacing={1}
            onClick={onExpandColumn}
            {...(isCollapsed && {
              sx: {
                transform: 'rotate(-90deg)',

                whiteSpace: 'nowrap',
              },
            })}
          >
            <Box>{isCollapsed ? <BiCaretRight /> : <BiCaretDown />}</Box>
            <Stack direction={'row'} spacing={1} mb={2}>
              <Typography>{column.icon}</Typography>
              <Typography fontWeight="bold">{column.title}</Typography>
            </Stack>
          </Stack>
          {!isCollapsed && (
            <>
              <Stack overflow="auto">
                <Droppable droppableId={column.id} type="ticket">
                  {(provided, { isDraggingOver }) => (
                    <BoardColumnList
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      borderRadius={2}
                      border={
                        isDraggingOver
                          ? '2px dashed #bcbcbc'
                          : '2px solid transparent'
                      }
                    >
                      <TicketList tickets={tickets} />

                      {provided.placeholder}
                    </BoardColumnList>
                  )}
                </Droppable>
              </Stack>
              <Button> + New Doc</Button>
            </>
          )}
        </Stack>
      )}
    </Draggable>
  );
};

export default BoardColumn;
