import { AppBar, SideBar, Tasks } from '../../components';
import { Box } from '@mui/material';

export default () => {
  return (
    <Box>
      <SideBar />
      <AppBar />
      <Box component='main'>
        <Box
          sx={{
            ml: {
              lg: '380px',
              sm: '0',
            },
            mt: '100px',
            display: 'flex',
            gap: '24px',
          }}
          position='absolute'
        >
          <Tasks />
          <Tasks />
        </Box>
      </Box>
    </Box>
  );
};
