import { AppBar, SideBar, Tasks } from '../../components';
import { Box } from '@mui/material';

export default () => {
  return (
    <Box>
      <SideBar />
      <Box
        position='relative'
        sx={{
          ml: { xs: '0', sm: '360px' },
        }}
      >
        <AppBar />
        <Box
          position='relative'
          sx={{
            width: 1,
            height: 1,
            // backgroundColor: 'red',
          }}
        >
          <Box
            sx={{
              p: 3,
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <Tasks />
            <Tasks />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
