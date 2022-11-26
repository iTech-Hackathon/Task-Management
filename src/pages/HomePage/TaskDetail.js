import { Close, Logout } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import marked from 'marked';
import { useState, useEffect } from 'react';

export default ({ setIsShow, isShow }) => {
  const handleClose = () => {
    setIsShow(false);
  };

  const Markdown = () => {
    const [content, setContent] = useState();

    let renderer = new marked.Renderer();
    renderer.image = (href, title, text) => {
      // Pada markdown harus diberikan text untuk merubah lebar gambar
      return `<img src="${href}" style="width: ${text}; height: auto" />`;
    };

    useEffect(() => {
      fetch(
        'https://gist.githubusercontent.com/afifabroory/4ff11d19ae641499712dbaf3ffcac651/raw/b2fda59b9c12d0e08bc5d3c09873aaaeb5f8f4af/sadsd'
      ).then(async (a) =>
        setContent(
          <div
            dangerouslySetInnerHTML={{
              __html: marked(await a.text(), { renderer }),
            }}
          />
        )
      );
    });

    return content;
  };

  return (
    <Box position='absolute' sx={{ width: 1, height: '1' }}>
      <Box
        sx={{
          display: isShow ? 'flex' : 'none',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            pt: '17px',
            pb: '16px',
            pl: '20px',
          }}
        >
          <IconButton edge='start' sx={{ color: '#FFF' }} onClick={handleClose}>
            <Close />
          </IconButton>
          <Typography
            variant='h2'
            sx={{
              ml: '10px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#FFF',
            }}
          >
            Task Details
          </Typography>
        </Box>
        <Box sx={{ px: 3 }}>
          <Markdown />
        </Box>
      </Box>
    </Box>
  );
};
