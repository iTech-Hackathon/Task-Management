import {
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ThemeProvider,
  Typography,
} from '@mui/material';
import ActiveTask from '../assets/Active Tasks.svg';
import CompletedTask from '../assets/Completed Tasks.svg';
import theme from '../theme';
import marked from 'marked';
import { useState, useEffect } from 'react';

export default () => {
  const Markdown = () => {
    const [content, setContent] = useState();

    useEffect(() => {
      fetch(
        'https://raw.githubusercontent.com/afifabroory/SudokuAreEz-SAT/main/README.md.old'
      ).then(async (a) =>
        setContent(
          <div
            dangerouslySetInnerHTML={{
              __html: marked(await a.text()),
            }}
          />
        )
      );
    });

    return content;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: 'flex',
            alignItems: 'center',
            py: '22px',
            pl: '14px',
            gap: '7px',
          }}
        >
          <Box component='img' src={CompletedTask} width='28' height='28' />
          <Typography
            variant='h3'
            color='primary.contrastText'
            sx={{ fontSize: '18px' }}
          >
            Detail Task
          </Typography>
        </Box>
        <Box
          sx={{
            px: 3,
          }}
        >
          <Markdown />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
