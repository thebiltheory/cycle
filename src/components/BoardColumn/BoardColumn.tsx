import { Box, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { BiCaretDown, BiCaretRight } from 'react-icons/bi';
import NewButton from '../NewButton';
import TicketList from '../TicketList';
import { BoardColumnList } from './BoardColumn.styles';

const BoardColumn: FC<any> = ({ column, tickets, index, onClickNewDoc }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onExpandColumn = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onClickNewDocHandle = () => {
    onClickNewDoc(column?.id);
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
          borderRadius={2}
          width={isCollapsed ? 33 : '270px'}
          height={isCollapsed ? '100%' : 'fit-content'}
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
            p={1}
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
              <Stack position="relative" overflow="auto" p={1}>
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
              <Box px={2} width="100%">
                <NewButton
                  label="New doc"
                  onClick={onClickNewDocHandle}
                  fullWidth
                />
              </Box>
            </>
          )}
        </Stack>
      )}
    </Draggable>
  );
};

export default BoardColumn;
