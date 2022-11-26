import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ActiveTask from '../assets/Active Tasks.svg';
import CompletedTask from '../assets/Completed Tasks.svg';
import theme from '../theme';

export default ({ heading, tasks }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const data = tasks.filter((task) => {
      if (heading === 'Active Tasks') return task.isCompleted === false;
      else if (heading === 'Completed Tasks') return task.isCompleted === true;
    });
    setTask(data);
  }, []);

  const handleChecked = (check, id) => {
    console.log(check, id);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 1,
          boxShadow: '0 0 4px 0 rgba(0, 0, 0, .5)',
          borderRadius: '5px',
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            py: '14px',
            pl: '14px',
            gap: '7px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}
        >
          <Box
            component='img'
            src={heading === 'Active Tasks' ? ActiveTask : CompletedTask}
            alt={`logo ${heading}`}
            width='28'
            height='28'
          />
          <Typography
            variant='h3'
            color='primary.contrastText'
            sx={{ fontSize: '18px' }}
          >
            {heading}
          </Typography>
        </Box>
        <List
          sx={{
            width: 1,
            py: '9px',
            px: '7px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
          }}
        >
          {task.map((value) => {
            return (
              <ListItem
                key={value.id}
                sx={{
                  boxShadow: '2px 2px 3px 0 rgba(0, 0, 0, .25)',
                  borderRadius: '8px',
                  p: 0,
                  pl: '20px',
                  gap: '15px',
                }}
              >
                <Checkbox
                  defaultChecked={value.isCompleted ? true : false}
                  onClick={(e) => handleChecked(e.target.checked, value.id)}
                />
                <ListItemButton
                  sx={{
                    py: '8.5px',
                    px: 0,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant='h4'
                    sx={{
                      fontSize: '16px',
                      fontWeight: '500',
                      mb: '4px',
                      width: 1,
                    }}
                  >
                    {value.judul}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontSize: '12px', fontWeight: '400', width: 1 }}
                  >
                    {value.date}
                  </Typography>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
};
