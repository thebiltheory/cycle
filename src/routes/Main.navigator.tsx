import { HiLightningBolt, HiSearch } from 'react-icons/hi';
import { RiNotificationBadgeLine } from 'react-icons/ri';
import { FiCommand, FiPlus } from 'react-icons/fi';
import { BsFiles } from 'react-icons/bs';
import NavigationItem from '../components/NavigationItem';
import { Box, Stack } from '@mui/material';

const MainNavigator = () => {
  return (
    <Stack p={2} spacing={1}>
      <NavigationItem
        to="/search"
        label="Search"
        leftElement={<HiSearch />}
        onClick={() => console.log('Onclick ...')}
      />
      <NavigationItem
        to="/notifications"
        label="Notifications"
        leftElement={<RiNotificationBadgeLine />}
        onClick={() => console.log('Onclick ...')}
      />
      <NavigationItem
        to="/commands"
        label="Commands"
        leftElement={<HiLightningBolt />}
        rightElement={
          <Stack direction="row" alignItems="center" spacing={1} flex={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius={1}
              bgcolor="#999999"
              color="black"
              height={16}
              width={16}
            >
              <FiCommand />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius={1}
              bgcolor="#999999"
              color="black"
              height={16}
              width={16}
            >
              K
            </Box>
          </Stack>
        }
        onClick={() => console.log('Onclick ...')}
      />
      <NavigationItem
        to="create-doc"
        label="Create doc"
        leftElement={<FiPlus />}
        onClick={() => console.log('Onclick ...')}
      />
      <NavigationItem
        to="all-docs"
        label="All docs"
        leftElement={<BsFiles />}
        onClick={() => console.log('Onclick ...')}
      />
    </Stack>
  );
};

export default MainNavigator;
