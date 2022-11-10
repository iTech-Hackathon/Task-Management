import { Box, Typography } from '@mui/material';

export default () => {
  return (
    <>
      <Box position='absolute' bottom={8} left={0} right={0}>
        <Typography
          textAlign='center'
          variant='caption'
          display='block'
          color='secondary.main'
        >
          iTech Poliban
          <br />
          Hackaton | E-Government
        </Typography>
      </Box>
    </>
  );
};
