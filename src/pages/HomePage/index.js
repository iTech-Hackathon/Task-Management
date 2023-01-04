import { AppBar, SideBar, Tasks } from '../../components';
import { Box } from '@mui/material';
import { useState } from 'react';
import TaskDetail from './TaskDetail';

export default ({isDashboard=false}) => {
  const [isShow, setIsShow] = useState(false);
  // data sementara aja dulu
  const tasks = [
    {
      id: '1',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: true,
    },
    {
      id: '2',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: true,
    },
    {
      id: '3',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: true,
    },
    {
      id: '4',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: true,
    },
    {
      id: '5',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: true,
    },
    {
      id: '6',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: false,
    },
    {
      id: '7',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: false,
    },
    {
      id: '8',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: false,
    },
    {
      id: '9',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: false,
    },
    {
      id: '10',
      judul: 'Membuat halaman landing',
      date: '#202203-01-02',
      isCompleted: false,
    },
  ];
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
            display: isShow ? 'none' : 'block',
          }}
        >
          <Box
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: {
                lg: 'row',
                md: 'row',
                sm: 'column',
                xs: 'column',
              },
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <Tasks heading='Active Tasks' tasks={tasks} setIsShow={setIsShow} />
            <Tasks
              heading='Completed Tasks'
              tasks={tasks}
              setIsShow={setIsShow}
            />
          </Box>
        </Box>
        <Box
          position='relative'
          sx={{
            width: 1,
          }}
        >
          <TaskDetail setIsShow={setIsShow} isShow={isShow} />
        </Box>
      </Box>
    </Box>
  );
};
