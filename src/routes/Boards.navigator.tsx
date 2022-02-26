import { TreeItem, TreeView } from '@mui/lab';

import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';
import NavigationItem from '../components/NavigationItem';
import NavigationItemMenu from '../components/NavigationItem/NavigationItemMenu';
import { sections } from '../mocks/sections';

const BoardsNavigator = () => {
  return (
    <>
      <TreeView
        defaultCollapseIcon={<VscTriangleDown />}
        defaultExpandIcon={<VscTriangleRight />}
        sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto', padding: 2 }}
      >
        {sections.map(({ id, name, boards }: any) => {
          return (
            <TreeItem
              key={id}
              nodeId={id}
              label={name}
              sx={{ marginBottom: 1 }}
            >
              {boards?.map(({ id, name, icon, slug }: any) => {
                return (
                  <NavigationItem
                    variant="secondary"
                    key={id}
                    to={`/${slug}`}
                    label={name}
                    leftElement={icon}
                    rightElement={NavigationItemMenu}
                    hideRightElementUntilHover
                    onClick={() => console.log('Onclick ...')}
                  />
                );
              })}
            </TreeItem>
          );
        })}
      </TreeView>
    </>
  );
};

export default BoardsNavigator;
