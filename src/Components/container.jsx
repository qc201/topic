import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function SimpleContainer() {
  return (
 <div>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfe8fc', height: '20vh'}} />
      </Container>
      </div>
  );
}

export default SimpleContainer;