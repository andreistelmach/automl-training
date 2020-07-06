import React from 'react';
import { Box, Button, useViewport, Heading } from '@airtable/blocks/ui';

export function ThankYou({ appState, setAppState }) {
  const viewport = useViewport();
  const startOver = () => {
    window.localStorage.clear();
    setAppState({ index: 1, state: {} });
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" border="default" overflow="hidden" width={viewport.size.width} height={viewport.size.height} padding={0}>
      <Heading>{appState.state.train.modelName} model has been successfully created.</Heading>
      <Button variant='primary' icon='redo' onClick={startOver}>Start Over</Button>
    </Box>
  );
}