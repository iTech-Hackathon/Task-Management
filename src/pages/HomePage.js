import { Box, Grid, Typography } from '@mui/material';

const HomePage = () => {
  const ColoredBox = ({ children, color, textColor }) => {
    return (
      <Grid
        item
        xs={4}
        height={200}
        sx={{
          backgroundColor: color,
          color: textColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 500,
        }}
      >
        {children}
      </Grid>
    );
  };

  return (
    <Grid container justifyContent='center'>
      <ColoredBox color='primary.light' textColor='white'>
        Light Primary
      </ColoredBox>
      <ColoredBox color='primary.main' textColor='white'>
        Primary
      </ColoredBox>
      <ColoredBox color='primary.dark' textColor='white'>
        Dark Primary
      </ColoredBox>
      <ColoredBox color='secondary.light' textColor='white'>
        Light Secondary
      </ColoredBox>
      <ColoredBox color='secondary.main' textColor='white'>
        Secondary
      </ColoredBox>
      <ColoredBox color='secondary.dark' textColor='white'>
        Dark Secondary
      </ColoredBox>
      <ColoredBox color='error.main' textColor='white'>
        Error
      </ColoredBox>
      <ColoredBox color='success.main' textColor='white'>
        Success
      </ColoredBox>
    </Grid>
  );
};

export default HomePage;
