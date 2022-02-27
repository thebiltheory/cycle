import { TreeItem, TreeView } from '@mui/lab';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import ActionMenu from '../components/ActionMenu';
import NavigationItem from '../components/NavigationItem';
import NewButton from '../components/NewButton';
import { getBoardByPathname } from '../mocks/boards';
import { sections } from '../mocks/sections';
import useUIState from '../state/hooks/useUIState';

const BoardsNavigator = () => {
  const { UIState } = useUIState();
  const location = useLocation();
  const [activeBoard, setActiveBoard] = useState<any>(null);

  const isSidebarCollapsed = UIState.sidebarStatus === 'collapsed';

  useEffect(() => {
    if (isSidebarCollapsed) {
      const board = getBoardByPathname(location.pathname);
      setActiveBoard(board);
    }
  }, [isSidebarCollapsed, location.pathname]);

  if (isSidebarCollapsed) {
    return (
      <Box mx="auto" py={3}>
        <NavigationItem
          variant="secondary"
          to={`boards/${activeBoard?.id}`}
          label={activeBoard?.name}
          leftElement={activeBoard?.icon}
          rightElement={ActionMenu}
          // hideRightElementUntilHover
          onClick={() => console.log('Onclick ...')}
        />
      </Box>
    );
  }

  return (
    <>
      <TreeView
        defaultCollapseIcon={<VscTriangleDown />}
        defaultExpandIcon={<VscTriangleRight />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', padding: 2 }}
        expanded={['SEC-1']}
      >
        {sections.map(({ id, name, boards }: any) => {
          return (
            <TreeItem
              key={id}
              nodeId={id}
              label={name}
              sx={{ marginBottom: 1, fontWeight: 'bold' }}
            >
              {boards?.map(({ id, name, icon }: any) => {
                return (
                  <NavigationItem
                    variant="secondary"
                    key={id}
                    to={`boards/${id}`}
                    label={name}
                    leftElement={icon}
                    rightElement={<ActionMenu />}
                    hideRightElementUntilHover
                    onClick={() => console.log('Onclick ...')}
                  />
                );
              })}
            </TreeItem>
          );
        })}
        <NewButton label="New Section" fullWidth />
      </TreeView>
    </>
  );
};

export default BoardsNavigator;
